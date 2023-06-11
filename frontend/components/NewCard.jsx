import { Box, Button } from "@mui/material"
import styles from "../styles/NewCard.module.css"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { useState } from "react"
import DetailFormDialog from "./DetailFormDialog"

export default function NewCard() {
    // Estados
    const [openDialog, setOpenDialog] = useState(false) // Estado que determina se o DetailFormDialog esta aberto ou fechado

    // Funcao que abre o DetailFormDialog
    const handleOpenDialog = () => setOpenDialog(true)

    // Funcao que fecha o DetailFormDialog
    const handleCloseDialog = () => setOpenDialog(false)

    return (
        <>
            <Button
                className={styles.card}
                title={"Adicionar novo componente curricular"}
                onClick={handleOpenDialog}
            >
                <AddOutlinedIcon sx={{ fontSize: 48, color: "#232323" }} />
            </Button>
            <DetailFormDialog open={openDialog} onClose={handleCloseDialog} />
        </>
    )
}
