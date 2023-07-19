import NewCard from "./NewCard"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid } from "@mui/material"
import { Droppable } from "react-beautiful-dnd"
import dynamic from "next/dynamic"

const Card = dynamic(() => import("./Card"), { ssr: false })

export default function ElectiveCoursesBox({ data, addData, moveCoursePosReqs }) {
    return (
        <Box className={styles.box}>
            <Box className={styles.tilte_box}>
                <h2>OPTATIVAS</h2>
            </Box>
            <Droppable droppableId="period-0">
                {(provided) => (
                    <Grid
                        container
                        className={styles.cards_box}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <Grid item>
                            <NewCard addData={addData} data={data} />
                        </Grid>
                        {data ? (
                            data
                                .filter((course) => course.period === 0)
                                .map((course, index) => (
                                    <Grid item key={course.code}>
                                        <Card
                                            index={index}
                                            course={course}
                                            data={data}
                                            addData={addData}
                                            moveCoursePosReqs={moveCoursePosReqs}
                                        />
                                    </Grid>
                                ))
                        ) : (
                            <CircularProgress color="inherit" />
                        )}
                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
        </Box>
    )
}
