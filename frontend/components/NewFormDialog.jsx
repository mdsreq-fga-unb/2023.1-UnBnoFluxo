import GavelRoundedIcon from "@mui/icons-material/GavelRounded"
import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Tip from "./Tip"
import Title from "./Title"

export default function NewFormDialog({ open, onClose, addData }) {
    // Estados
    const [coursesList, setCoursesList] = useState(null) // Estado para armazenar as opcoes de fluxograma existentes na api
    const [selectedCourses, setSelectedCourses] = useState(null) // Estado para armazenar os cursos selecionados
    const [selectedFile, setSelectedFile] = useState(null) // Estado para armazenar arquivo selecionado

    // Funcao assincrona para o fetch na api de cursos disponiveis
    const fetchCourses = async () => {
        try {
            const response = await axios.get("https://unbnofluxo.uk/api/courses") // TODO:
            // const response = await axios.get("api/courses")
            setCoursesList(response.data)
        } catch (error) {
            console.error("Erro ao obter dados da API:", error)
        }
    }

    // Funcao que cuida da atualizacao dos dados atualmente montados na aplicacao
    const handleAssemble = () => {
        if (selectedFile) {
            addData(selectedFile)
            setSelectedFile(null) // Limpa o estado do arquivo após a montagem
        }

        if (selectedCourses) {
            selectedCourses.forEach(async (selectedCourse) => {
                try {
                    const response = await axios.get(
                        `https://unbnofluxo.uk/api/course/${selectedCourse.endpoint}`
                    ) // TODO:
                    // const response = await axios.get(`/api/${selectedCourse.endpoint}`)
                    addData(response.data)
                } catch (error) {
                    console.error(`Erro ao obter dados do curso "${selectedCourse.name}":`, error)
                }
            })
            setSelectedCourses(null) // Limpa o estado dos cursos selecionados após a montagem
        }
        onClose()
    }

    // Funcao que atualiza os dados do estado que monitora quais cursos estao autalmente selecionados no Autocomplete
    const handleFileChange = (event) => {
        const file = event.target.files[0]

        // Verifica se o arquivo é do tipo JSON
        if (file && file.type === "application/json") {
            const reader = new FileReader()
            reader.onload = (e) => {
                try {
                    const content = e.target.result // Lê o conteúdo do arquivo
                    const data = JSON.parse(content) // Converte o conteúdo do arquivo em uma lista de objetos
                    setSelectedFile(data) // Atualiza o estado com a lista de objetos
                } catch (error) {
                    console.error("Erro ao converter arquivo JSON:", error)
                    setSelectedFile(null) // Limpa o estado em caso de erro de conversão
                }
            }
            reader.readAsText(file)
        } else {
            console.error("Formato de arquivo inválido. Selecione um arquivo JSON.")
            setSelectedFile(null) // Limpa o estado se o arquivo selecionado for inválido
        }
    }

    // useEffect que contem as funcoes que sao executadas sempre que o componte NewFormDialog é reindenizado
    useEffect(() => {
        fetchCourses()
    }, [])

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle m={1}>
                <Title title={"Montando Fluxograma..."} />
            </DialogTitle>

            <DialogContent>
                <Stack spacing={3} my={6} mx={[0, 8, 16]}>
                    <p>Para montar seu fluxograma, escolha uma das opções abaixo:</p>
                    {coursesList && (
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={coursesList}
                            getOptionLabel={(course) => course.name}
                            filterSelectedOptions
                            onChange={(event, newValue) => {
                                setSelectedCourses(newValue)
                            }} // Atualiza o estado dos cursos selecionados
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Curso"
                                    placeholder="Selecione um curso"
                                    helperText={
                                        <Tip text=" Pesquise um fluxograma diretamente da nossa base de dados." />
                                    }
                                />
                            )}
                        />
                    )}

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <hr style={{ flex: "1", borderColor: "#232323" }} />
                        <Typography variant="body1" sx={{ mx: 1, color: "#232323" }}>
                            ou
                        </Typography>
                        <hr style={{ flex: "1", borderColor: "#232323" }} />
                    </Box>

                    <TextField
                        type="file"
                        // label="Curso" // todo: remover aquele botao chato "Escolher aquivo" e colocar label
                        hidden
                        onChange={handleFileChange}
                        inputProps={{ accept: ".json" }}
                        helperText={
                            <Tip text="Faça upload de um fluxograma diretamente do seu computador." />
                        }
                    />
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} sx={{ color: "#DB3B4B" }}>
                    <Typography mx={1}>Cancelar</Typography>
                </Button>
                <Button onClick={handleAssemble} variant="contained" sx={{ background: "#232323" }}>
                    <GavelRoundedIcon />
                    <Typography mx={1}>Montar fluxograma</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    )
}
