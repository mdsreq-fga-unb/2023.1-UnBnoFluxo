import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { saveAs } from "file-saver"
import React, { useState } from "react"
import styles from "../styles/NavBar.module.css"
import NewFormDialog from "./NewFormDialog"
import DetailFormDialog from "./DetailFormDialog"

export default function NavBar({ data, addData, clearData }) {
    // Estados
    const [openDialog, setOpenDialog] = useState(false) // Estado que determina se o NewFormDialog esta aberto ou fechado
    const [open, setOpen] = useState(false) // Estado que determina se o DetailFormDialog esta aberto ou fechado

    // Funcao que abre o NewFormDialog
    const handleOpenDialog = () => setOpenDialog(true)

    // Funcao que fecha o NewFormDialog
    const handleCloseDialog = () => setOpenDialog(false)

    // Funcao responsavel por fazer o download dos dados carregados atualmente no app
    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
        saveAs(blob, "MeuFluxograma.json")
    }

    //funçoes para abrir e fechar caixa de dialogo do DetailFormDialog
    const handleOpenDetail = () => setOpen(true)
    const handleCloseDetail = () => setOpen(false)

    return (
        <AppBar style={{ color: "232323" }} position="fixed" className={styles.navBar}>
            <Toolbar>
                <Box
                    component="img"
                    sx={{
                        height: 64,
                    }}
                    alt="Unb no Fluxo logo."
                    src="/logo.svg"
                />

                <div className={styles.rightButtons}>
                    <Button color="inherit" variant="elevated" onClick={clearData}>
                        Limpar
                    </Button>
                    <Button color="inherit" variant="elevated" onClick={handleDownload}>
                        Download
                    </Button>
                    <Button color="inherit" variant="elevated" onClick={handleOpenDialog}>
                        Novo
                    </Button>
                    <Button color="inherit" onClick={handleOpenDetail}>
                        Em branco
                    </Button>
                </div>
            </Toolbar>

            <NewFormDialog open={openDialog} onClose={handleCloseDialog} addData={addData} />
            <DetailFormDialog open={open} onClose={handleCloseDetail} addData={addData} />
        </AppBar>
    )
}
