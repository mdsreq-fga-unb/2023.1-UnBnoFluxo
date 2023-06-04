import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Button, IconButton, Toolbar } from "@mui/material"
import { saveAs } from "file-saver"
import React, { useState } from "react"
import styles from "../styles/NavBar.module.css"
import NewFormDialog from "./NewFormDialog"

export default function NavBar({ setData }) {
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpenDialog = () => setOpenDialog(true)
    const handleCloseDialog = () => setOpenDialog(false)

    const handleDownload = () => {
        const data = localStorage.getItem("data")
        if (data) {
            const blob = new Blob([data], { type: "application/json" })
            saveAs(blob, "MeuFluxograma.json")
        }
    }

    return (
        <AppBar position="fixed" className={styles.navBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div className={styles.rightButtons}>
                    <Button color="inherit" onClick={handleDownload}>
                        Download
                    </Button>
                    <Button color="inherit" onClick={handleOpenDialog}>
                        Novo
                    </Button>
                </div>
            </Toolbar>

            <NewFormDialog open={openDialog} onClose={handleCloseDialog} setData={setData} />
        </AppBar>
    )
}
