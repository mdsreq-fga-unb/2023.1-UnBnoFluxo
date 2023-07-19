import { Box } from "@mui/system"
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

    // Funcao auxiliar para pegar o index de um determindado curso em data
    const getIndex = (code) => {
        const index = data.findIndex((course) => course.code === code)
        return index
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
                    <div
                        className={styles.card}
                        onClick={handleOpenDialog}
                        onMouseOver={handleMouseLeave}
                        onMouseOut={handleMouseEnter}
                        title={
                            course.displayName +
                            "\n" +
                            course.code +
                            " / " +
                            course.period +
                            "º Per"
                        }
                        style={{
                            backgroundColor: highlightColor,
                            borderRadius: "0.5rem",
                            ...provided.draggableProps.style,
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
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
                    </div>
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
