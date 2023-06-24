import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { saveAs } from "file-saver"
import React from "react"
import { useOpenDialog } from "../hooks/useOpenDialog"
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
            <Toolbar>
                <Box component="img" sx={{ height: 64 }} alt="Unb no Fluxo logo." src="/logo.svg" />

                <Box sx={{ marginLeft: "auto" }}>
                    <Button color="inherit" variant="elevated" onClick={clearData}>
                        Limpar
                    </Button>
                    <Button color="inherit" variant="elevated" onClick={handleDownload}>
                        Download
                    </Button>
                    <Button color="inherit" variant="elevated" onClick={handleOpenDialog}>
                        Novo
                    </Button>
                </Box>
            </Toolbar>
            <NewFormDialog open={openDialog} onClose={handleCloseDialog} addData={addData} />
        </AppBar>
    )
}
