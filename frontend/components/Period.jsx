import Card from "./Card"

import styles from "../styles/Period.module.css"
import { CircularProgress } from "@mui/material"

export default function Period({ data, periodNumber }) {
    return (
        <div className={styles.period}>
            <div className={styles.tilte_box}>
                <h2> {periodNumber}º PERÍODO</h2>
            </div>
            {data ? (
                data
                    .filter((course) => course.period == periodNumber)
                    .map((course) => <Card key={course.code} course={course} />)
            ) : (
                <CircularProgress color="inherit" />
            )}
        </div>
    )
}
