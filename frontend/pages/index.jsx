import { useState } from "react"
import ElectiveCoursesBox from "../components/ElectiveCoursesBox"
import MandatoryCoursesBox from "../components/MandatoryCoursesBox"
import NavBar from "../components/NavBar"
import Title from "../components/Title"
import { useData } from "../hooks/useData"
import styles from "../styles/Home.module.css"

export default function Home() {
    const maxPeriodNumber = 10 // Todo: Ajustar pra ser responsivo à fetchs e editavel pelo ususario
    const [flowName, setFlowName] = useState("Meu Fluxograma")

    // Estados
    const { data, addData, clearData } = useData() // Estado que controla os dados armazendos no app

    return (
        <>
            <main className={styles.main}>
                <NavBar data={data} addData={addData} clearData={clearData} flowName={flowName} />
                <Title title={flowName} editable={true} setTitle={setFlowName} />
                <MandatoryCoursesBox data={data} maxPeriodNumber={maxPeriodNumber} />
                <ElectiveCoursesBox data={data} addData={addData} />
            </main>
        </>
    )
}
