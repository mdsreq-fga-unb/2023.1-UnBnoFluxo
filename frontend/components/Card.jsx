import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { useOpenDialog } from "../hooks/useOpenDialog"
import styles from "../styles/Card.module.css"
import DetailFormDialog from "./DetailFormDialog"

export default function Card({
    course,
    addData,
    data,
    getHighlightColor,
    setFocused,
    moveCoursePosReqs,
    index,
}) {
    const [openDialog, handleOpenDialog, handleCloseDialog] = useOpenDialog() // Estado que determina se o DetailFormDialog esta aberto ou fechado
    const [highlightColor, setHighlightColor] = useState() // Estado que determina a cor de fundo do card

    const handleMouseEnter = () => {
        if (typeof setFocused === "function") setFocused(course.code)
    }

    const handleMouseLeave = () => {
        if (typeof setFocused === "function") setFocused(null)
    }

    useEffect(() => {
        setHighlightColor(
            typeof getHighlightColor === "function" ? getHighlightColor(course.code) : "#FFFFFF"
        )
    }, [getHighlightColor])

    return (
        <>
            <Draggable key={course.code} draggableId={course.code} index={index}>
                {(provided) => (
                    <Box
                        className={styles.card}
                        onClick={handleOpenDialog}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        title={`${course.displayName}\n${course.code} / ${course.period}º Per`}
                        sx={{
                            backgroundColor: highlightColor,
                            borderRadius: "0.5rem",
                            transition: "background 1.9s ease",
                            ...provided.draggableProps.style,
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Box className={styles.textBox}>
                            {course.alias ? (
                                <strong className={styles.alias}>{course.alias}</strong>
                            ) : (
                                <strong className={styles.displayName}>{course.displayName}</strong>
                            )}
                        </Box>

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
                    </Box>
                )}
            </Draggable>
            <DetailFormDialog
                open={openDialog}
                onClose={handleCloseDialog}
                addData={addData}
                flowData={data}
                course={course}
                moveCoursePosReqs={moveCoursePosReqs}
            />
        </>
    )
}
