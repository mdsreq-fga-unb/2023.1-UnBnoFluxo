import NewCard from "./NewCard"
import Card from "./Card"

import styles from "../styles/OptativesBox.module.css"
import { Box, CircularProgress, Grid } from "@mui/material"

export default function OptativesBox({ data }) {
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
                    <NewCard />
                </Grid>
                {data ? (
                    data
                        .filter((course) => course.period === 0)
                        .map((course) => (
                            <Grid item p={2} key={course.code}>
                                <Card course={course} />
                            </Grid>
                        ))
                ) : (
                    <CircularProgress color="inherit" />
                )}
            </Grid>
        </Box>
    )
}