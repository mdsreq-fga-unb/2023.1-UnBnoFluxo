import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import NavBar from "../components/NavBar"
import Title from "../components/Title"
import { useData } from "../hooks/useData"
import styles from "../styles/Home.module.css"

import dynamic from "next/dynamic"
const MandatoryCoursesBox = dynamic(() => import("../components/MandatoryCoursesBox"), {
    ssr: false,
})
const ElectiveCoursesBox = dynamic(() => import("../components/ElectiveCoursesBox"), { ssr: false })

export default function Home() {
    const [flowName, setFlowName] = useState("Meu Fluxograma") // Todo: melhorar

    // Estados
    const { data, addData, clearData, maxPeriodNumber, moveCoursePosReqs } = useData() // Estado que controla os dados armazendos no app

    const handleDragEnd = (result) => {
        console.log("soltei")
    }
    return (
        <>
            <main className={styles.main}>
                <NavBar data={data} addData={addData} clearData={clearData} flowName={flowName} />
                <Title title={flowName} editable setTitle={setFlowName} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <MandatoryCoursesBox
                        data={data}
                        maxPeriodNumber={maxPeriodNumber}
                        addData={addData}
                        moveCoursePosReqs={moveCoursePosReqs}
                    />
                    <ElectiveCoursesBox
                        data={data}
                        addData={addData}
                        moveCoursePosReqs={moveCoursePosReqs}
                    />
                </DragDropContext>
            </main>
        </>
    )
}
