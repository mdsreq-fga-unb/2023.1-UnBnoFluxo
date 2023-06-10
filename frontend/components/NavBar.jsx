import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { saveAs } from "file-saver"
import React, { useState } from "react"
import styles from "../styles/NavBar.module.css"
import NewFormDialog from "./NewFormDialog"

export default function NavBar({ data, addData, clearData }) {
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpenDialog = () => setOpenDialog(true)
    const handleCloseDialog = () => setOpenDialog(false)

    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
        saveAs(blob, "MeuFluxograma.json")
    }

    return (
        <AppBar position="fixed" className={styles.navBar}>
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
                </div>
            </Toolbar>

            <NewFormDialog open={openDialog} onClose={handleCloseDialog} addData={addData} />
        </AppBar>
    )
}
