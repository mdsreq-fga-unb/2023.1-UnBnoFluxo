import Card from "./Card"

import styles from "../styles/Period.module.css"
import { Box, CircularProgress, Stack } from "@mui/material"

export default function Period({ data, periodNumber, addData }) {
    return (
        <Stack spacing={2} className={styles.period}>
            <Box className={styles.tilte_box}>
                <h2> {periodNumber}º PERÍODO</h2>
            </Box>
            {data ? (
                data
                    .filter((course) => course.period == periodNumber)
                    .map((course) => (
                        <Card key={course.code} course={course} addData={addData} data={data} />
                    ))
            ) : (
                <CircularProgress color="inherit" />
            )}
            <Box className={styles.hour_box}>
                <h2> 120h</h2>
            </Box>
        </Stack>
    )
}
