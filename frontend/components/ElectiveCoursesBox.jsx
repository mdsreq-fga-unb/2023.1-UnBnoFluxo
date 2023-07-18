import NewCard from "./NewCard"
import Card from "./Card"
import styles from "../styles/ElectiveCoursesBox.module.css"
import { Box, CircularProgress, Grid } from "@mui/material"

export default function ElectiveCoursesBox({ data, addData, moveCoursePosReqs }) {
    return (
        <Box className={styles.box}>
            <Box className={styles.tilte_box}>
                <h2>OPTATIVAS</h2>
            </Box>

            <Grid
                container
                className={styles.cards_box}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item p={2}>
                    <NewCard addData={addData} data={data} />
                </Grid>
                {data ? (
                    data
                        .filter((course) => course.period === 0)
                        .map((course) => (
                            <Grid item p={2} key={course.code}>
                                <Card
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
            </Grid>
        </Box>
    )
}
