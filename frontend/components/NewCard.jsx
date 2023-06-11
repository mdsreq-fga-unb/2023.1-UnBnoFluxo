import { Box, Button } from "@mui/material"
import styles from "../styles/NewCard.module.css"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"

export default function NewCard() {
    return (
        <Button className={styles.card} title={"Adicionar novo componente curricular"}>
            <AddOutlinedIcon sx={{ fontSize: 48, color: "#232323" }} />
        </Button>
    )
}
