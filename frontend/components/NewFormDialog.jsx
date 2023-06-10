import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Input,
    TextField,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"

export default function NewFormDialog({ open, onClose, addData }) {
    // Estados
    const [coursesList, setCoursesList] = useState(null) // Estado para armazenar as opcoes de fluxograma existentes na api
    const [selectedCourses, setSelectedCourses] = useState(null) // Estado para armazenar os cursos selecionados
    const [selectedFile, setSelectedFile] = useState(null) // Estado para armazenar arquivo selecionado

    // Funcao assincrona para o fetch na api de cursos disponiveis
    const fetchCourses = async () => {
        try {
            // const response = await axios.get("135.148.35.38:25532/get/courses") // TODO: fazer o uso da api
            const response = await axios.get("/api/courses")
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
                    // const response = await axios.get(`135.148.35.38:25532/get/${selectedCourse.endpoint}`) // TODO: fazer o uso da api
                    const response = await axios.get(`/api/${selectedCourse.endpoint}`)
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
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Montando Fluxograma...</DialogTitle>

            <DialogContent>
                <p>Para montar seu fluxograma você escolha uma das opções abaixo:</p>
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
                            <TextField {...params} label="Curso" placeholder="Selecione um curso" />
                        )}
                    />
                )}
                <p>
                    <strong>Pesquise um fluxograma diretamente da nossa base de dados.</strong>
                </p>
                <p>
                    <strong>
                        ---------------------------------- ou ----------------------------------
                    </strong>
                </p>
                <Input type="file" onChange={handleFileChange} />
                <p>
                    <strong>Faça upload de um fluxograma diretamente do seu computador.</strong>
                </p>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleAssemble} variant="contained" color="primary">
                    Montar fluxograma
                </Button>
            </DialogActions>
        </Dialog>
    )
}
