import Card from "./Card"
import styles from "../styles/Period.module.css"
import { Box, CircularProgress, Stack } from "@mui/material"

export default function Period({ data, periodNumber, addData }) {

    // Calcula a soma das cargas horárias usando a função reduce
    const somaCarga = data.reduce((acumulador, course) => {
        if (course.period === periodNumber) {
            return acumulador + course.workload;
        } else {
            return acumulador;
        }
    }, 0); // O segundo argumento de reduce é o valor inicial do acumulador


    return (
        <div>
            <Stack spacing={2} className={styles.period}>
                <Box className={styles.tilte_box}>
                    <h2> {periodNumber}º PERÍODO</h2>
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
                <Box className={styles.hour_box}>
                    <Box component="h2">{somaCarga}h</Box>
                </Box>
            </Stack>
        </div>
    )
}
