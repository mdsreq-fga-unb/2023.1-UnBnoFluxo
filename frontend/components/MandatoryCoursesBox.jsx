import { Stack } from "@mui/material"
import styles from "../styles/MandatoryCoursesBox.module.css"
import { useFlowHighlight } from "../hooks/useFlowHighlight"
import dynamic from "next/dynamic"

const Period = dynamic(() => import("./Period"), { ssr: false })

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
