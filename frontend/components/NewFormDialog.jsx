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
import React, { useEffect, useState } from "react"

export default function NewFormDialog({ open, onClose, setData }) {
    const [coursesList, setCoursesList] = useState(null) // Estado para armazenar as opcoes de fluxograma existentes na api
    const [selectedCourses, setSelectedCourses] = useState([]) // Estado para armazenar os cursos selecionados
    const [selectedFile, setSelectedFile] = useState(null) // Estado para armazenar arquivo selecionado

    const handleAssemble = () => {
        // Criando funcao assincrona que vai fazer o fetch na api
        const fetchData = async () => {
            const response = await fetch(`/api/${selectedCourses.endpoint}`) // TODO: depois sera necessario transformar isso em um POST mas como é so um curso o ainda nao é necessario a mescla ainda
            const data = await response.json()
            setData(data)
            localStorage.setItem("data", JSON.stringify(data))
        }

        if (selectedFile) {
            setData(selectedFile)
            localStorage.setItem("data", JSON.stringify(selectedFile))
        } else if (selectedCourses) {
            fetchData() // Chamando funcao assincrona
        } else {
            alert("Faça upload de um arquivo ou selecione uma das opcoes do nosso banco de dados")
        }
        onClose() // Fecha o dialogo apos montar novo fluxograma
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        // Verifica se o arquivo é do tipo JSON
        if (file && file.type === "application/json") {
            const reader = new FileReader()

            reader.onload = (e) => {
                try {
                    // Lê o conteúdo do arquivo
                    const content = e.target.result

                    // Converte o conteúdo do arquivo em uma lista de objetos
                    const data = JSON.parse(content)

                    // Atualiza o estado com a lista de objetos
                    setSelectedFile(data)
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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/courses")
            const data = await response.json()
            setCoursesList(data)
        }

        fetchData()
    }, [])

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Montando Fluxograma...</DialogTitle>

            <DialogContent>
                <p>Para montar seu fluxograma, escolha uma das opções abaixo:</p>
                {coursesList && (
                    <Autocomplete
                        // multiple // TODO: MUDAR ESSE PARAMETRO PARA PERMITIR MESCLAR
                        id="tags-outlined"
                        options={coursesList}
                        getOptionLabel={(course) => course.name}
                        filterSelectedOptions
                        value={selectedCourses} // Valor dos cursos selecionados
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
