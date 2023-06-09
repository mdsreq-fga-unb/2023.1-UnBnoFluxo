import { Button } from "@mui/material"
import { useOpenDialog } from "../hooks/useOpenDialog"
import styles from "../styles/Card.module.css"
import DetailFormDialog from "./DetailFormDialog"

export default function Card({ course, addData, data }) {
    const [openDialog, handleOpenDialog, handleCloseDialog] = useOpenDialog() // Estado que determina se o DetailFormDialog esta aberto ou fechado

    return (
        <>
            <Button
                sx={{ background: "#FFFFFF" }}
                className={styles.card}
                title={course.displayName + "\n" + course.code + " / " + course.period + "º Per"}
                onClick={handleOpenDialog}
            >
                <div className={styles.textBox}>
                    {course.alias ? (
                        <strong className={styles.alias}>{course.alias}</strong>
                    ) : (
                        <strong className={styles.displayName}>{course.displayName}</strong>
                    )}
                </div>

                <div
                    className={`${
                        course.nature === "OBRIGATORIO"
                            ? styles.mandatory
                            : course.nature === "OPTATIVO"
                            ? styles.optative
                            : course.nature === "COMPLEMENTAR"
                            ? styles.complementary
                            : styles.unatural
                    }`}
                    data-testid="tipo-element"
                />
            </Button>
            <DetailFormDialog
                open={openDialog}
                onClose={handleCloseDialog}
                addData={addData}
                flowData={data}
                course={course}
            />
        </>
    )
}