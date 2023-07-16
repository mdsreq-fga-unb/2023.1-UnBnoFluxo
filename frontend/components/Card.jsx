import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useOpenDialog } from "../hooks/useOpenDialog"
import styles from "../styles/Card.module.css"
import DetailFormDialog from "./DetailFormDialog"

export default function Card({ course, addData, data, getHighlightColor, setFocused }) {
    const [openDialog, handleOpenDialog, handleCloseDialog] = useOpenDialog() // Estado que determina se o DetailFormDialog esta aberto ou fechado
    const [highlightColor, setHighlightColor] = useState() // Estado que determina a cor de fundo do card

    const handleMouseEnter = () => {
        if (typeof setFocused === "function") setFocused(course.code)
    }
    const handleMouseLeave = () => {
        if (typeof setFocused === "function") setFocused("")
    }

    useEffect(() => {
        setHighlightColor(
            typeof getHighlightColor === "function" ? getHighlightColor(course.code) : "#FFFFFF"
        )
    }, [getHighlightColor])

    return (
        <>
            <Button
                style={{ background: highlightColor, borderRadius: "0.5rem" }}
                className={styles.card}
                title={course.displayName + "\n" + course.code + " / " + course.period + "º Per"}
                onClick={handleOpenDialog}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
