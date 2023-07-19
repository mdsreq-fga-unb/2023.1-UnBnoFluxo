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
    const { data, dataDict, setData, addData, clearData, maxPeriodNumber, moveCoursePosReqs } =
        useData() // Estado que controla os dados armazendos no app

    const handleDragEnd = (result) => {
        const { source, destination } = result

        // Caso dropado em area nao reconhecida
        if (!destination) return

        // Caso dropado no mesmo lugar de onde saiu
        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return

        // Caso dropado no mesmo periodo mas em posicao diferente
        const sourcePeriod = parseInt(source.droppableId.replace("period-", ""))
        const destinationPeriod = parseInt(destination.droppableId.replace("period-", ""))
        let periodCodes = data
            .filter((course) => course.period === destinationPeriod)
            .map((course) => course.code)

        if (sourcePeriod === destinationPeriod) {
            const [removed] = periodCodes.splice(source.index, 1)
            periodCodes.splice(destination.index, 0, removed)
            const removedCourses = {}
            periodCodes.forEach((key) => {
                if (dataDict.hasOwnProperty(key)) {
                    removedCourses[key] = dataDict[key]
                    delete dataDict[key]
                }
            })
            setData(Object.values(dataDict).concat(Object.values(removedCourses)))
            return
        }

        // Se chegou aqui é caso esta movendo de um periodo para outro
        periodCodes.splice(destination.index, 0, result.draggableId)
        const removedCourses = {}
        periodCodes.forEach((key) => {
            if (dataDict.hasOwnProperty(key)) {
                removedCourses[key] = dataDict[key]
                delete dataDict[key]
            }
        })
        removedCourses[result.draggableId].period = destinationPeriod
        setData(Object.values(dataDict).concat(Object.values(removedCourses)))

        // Move os pos requisitos pra frente
        if (sourcePeriod !== 0 && sourcePeriod < destinationPeriod) {
            moveCoursePosReqs(result.draggableId, destinationPeriod - sourcePeriod)
        }
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
