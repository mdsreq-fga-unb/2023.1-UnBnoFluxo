import Card from "./Card"

import styles from "../styles/Period.module.css"
import { Box, CircularProgress, Stack } from "@mui/material"

export default function Period({ data, periodNumber }) {
    return (
        <Stack spacing={2} className={styles.period}>
            <Box className={styles.tilte_box}>
                <h2> {periodNumber}º PERÍODO</h2>
            </Box>
            {data ? (
                data
                    .filter((course) => course.period == periodNumber)
                    .map((course) => <Card key={course.code} course={course} />)
            ) : (
                <CircularProgress color="inherit" />
            )}
        </Stack>
    )
}
