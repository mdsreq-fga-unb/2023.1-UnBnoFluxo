import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { Button } from "@mui/material"
import { useOpenDialog } from "../hooks/useOpenDialog"
import styles from "../styles/NewCard.module.css"
import DetailFormDialog from "./DetailFormDialog"

export default function NewCard({ addData, data }) {
    // Estados
    const [openDialog, handleOpenDialog, handleCloseDialog] = useOpenDialog() // Estado que determina se o DetailFormDialog esta aberto ou fechado

    return (
        <>
            <Button
                sx={{ background: "#FFFFFF" }}
                className={styles.card}
                title={"Adicionar novo componente curricular"}
                onClick={handleOpenDialog}
            >
                <AddOutlinedIcon sx={{ fontSize: 48, color: "#232323" }} />

                <div className={styles.detail} />
            </Button>

            <DetailFormDialog
                open={openDialog}
                onClose={handleCloseDialog}
                addData={addData}
                flowData={data}
            />
        </>
    )
}
