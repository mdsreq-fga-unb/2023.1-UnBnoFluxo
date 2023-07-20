import { Box, CircularProgress, Stack } from "@mui/material"

import { Droppable } from "react-beautiful-dnd"
import styles from "../styles/Period.module.css"
import dynamic from "next/dynamic"

const Card = dynamic(() => import("./Card"), { ssr: false })

export default function Period({
    data,
    periodNumber,
    addData,
    getHighlightColor,
    setFocused,
    moveCoursePosReqs,
}) {
  
        // Calcula a soma das cargas horárias usando a função reduce
    const periodWorkloud = data
        .filter((course) => course.period === periodNumber && course.hasOwnProperty("workloud"))
        .reduce((acumulador, course) => {
            return acumulador + course.workloud
        }, 0)
    
    return (
        <Droppable droppableId={"period-" + periodNumber}>
            {(provided) => (
                <Stack
                    className={styles.period}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <Box className={styles.tilte_box}>
                        <h2> {periodNumber}º PERÍODO</h2>
                    </Box>
                    <Box className={styles.hour_box}>
                        <h2>{periodWorkloud}h</h2>
                    </Box>
                    {data ? (
                        data
                            .filter((course) => course.period === periodNumber)
                            .map((course, index) => (
                                <Card
                                    key={course.code}
                                    course={course}
                                    addData={addData}
                                    data={data}
                                    index={index}
                                    getHighlightColor={getHighlightColor}
                                    setFocused={setFocused}
                                    moveCoursePosReqs={moveCoursePosReqs}
                                />
                            ))
                    ) : (
                        <CircularProgress color="inherit" />
                    )}
                    {provided.placeholder}
                </Stack>
            )}
        </Droppable>

    )
}
