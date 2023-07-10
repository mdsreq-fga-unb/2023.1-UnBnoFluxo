import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import DownloadIcon from "@mui/icons-material/Download"
import { AppBar, Box, Stack, Toolbar } from "@mui/material"
import { saveAs } from "file-saver"
import React from "react"
import { useOpenDialog } from "../hooks/useOpenDialog"
import CustomButton from "./CustomButton"
import NewFormDialog from "./NewFormDialog"

export default function NavBar({ data, addData, clearData, flowName }) {
    // Estados
    const [openDialog, handleOpenDialog, handleCloseDialog] = useOpenDialog() // Estado que determina se o NewFormDialog esta aberto ou fechado

    // Funcao responsavel por fazer o download dos dados carregados atualmente no app
    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
        saveAs(blob, `${flowName}.json`)
    }

    return (
        <AppBar position="fixed" sx={{ background: "#232323", marginBottom: "16px" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box component="img" sx={{ height: 64 }} alt="Unb no Fluxo logo." src="/logo.svg" />

                <Stack direction="row" justifyContent="end" alignItems="center" spacing={1}>
                    <CustomButton text={"Adicionar Fluxograma"} onClick={handleOpenDialog}>
                        <AddIcon />
                    </CustomButton>
                    {data.length > 0 && (
                        <>
                            <CustomButton text={"Download"} onClick={handleDownload}>
                                <DownloadIcon />
                            </CustomButton>
                            <CustomButton text={"Limpar"} onClick={clearData}>
                                <DeleteIcon />
                            </CustomButton>
                        </>
                    )}
                </Stack>
            </Toolbar>
            <NewFormDialog open={openDialog} onClose={handleCloseDialog} addData={addData} />
        </AppBar>
    )
}
