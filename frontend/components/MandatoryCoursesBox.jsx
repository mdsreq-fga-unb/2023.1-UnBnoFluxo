import { Stack } from "@mui/material"
import Period from "./Period"
import styles from "../styles/MandatoryCoursesBox.module.css"
import { useFlowHighlight } from "../hooks/useFlowHighlight"

export default function MandatoryCoursesBox({ data, maxPeriodNumber, addData, moveCoursePosReqs }) {
    const { getHighlightColor, setFocused } = useFlowHighlight(data)

    return (
        <Stack direction="row" className={`${styles.grid} ${styles.scrollable}`}>
            {Array.from({ length: maxPeriodNumber }, (_, index) => (
                <Period
                    key={index + 1}
                    data={data}
                    periodNumber={index + 1}
                    addData={addData}
                    getHighlightColor={getHighlightColor}
                    setFocused={setFocused}
                    moveCoursePosReqs={moveCoursePosReqs}
                />
            ))}
        </Stack>
    )
}
