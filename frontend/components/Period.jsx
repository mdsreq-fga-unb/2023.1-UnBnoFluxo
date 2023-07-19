import { Box, CircularProgress, Stack } from "@mui/material"
import styles from "../styles/Period.module.css"
import Card from "./Card"

export default function Period({ data, periodNumber, addData }) {
    // Calcula a soma das cargas horárias usando a função reduce
    const periodWorkloud = data
        .filter((course) => course.period === periodNumber && course.hasOwnProperty("workloud"))
        .reduce((acumulador, course) => {
            return acumulador + course.workloud
        }, 0)

    return (
        <div>
            <Stack spacing={2} className={styles.period}>
                <Box className={styles.tilte_box}>
                    <h2> {periodNumber}º PERÍODO</h2>
                </Box>
                <Box className={styles.hour_box}>
                    <h2>{periodWorkloud}h</h2>
                </Box>
                {data ? (
                    data
                        .filter((course) => parseInt(course.period) === periodNumber)
                        .map((course) => (
                            <Card key={course.code} course={course} addData={addData} data={data} />
                        ))
                ) : (
                    <CircularProgress color="inherit" />
                )}
            </Stack>
        </div>
    )
}
