import styles from "../styles/NewCard.module.css"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"

export default function NewCard() {
    return (
        <div className={styles.card} title={"Adicionar novo componente curricular"}>
            <AddOutlinedIcon sx={{ fontSize: 40, color: "#232323" }} />
        </div>
    )
}
