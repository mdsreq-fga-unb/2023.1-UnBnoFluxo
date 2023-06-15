import styles from "../styles/Home.module.css"
import ElectiveCoursesBox from "../components/ElectiveCoursesBox"
import MandatoryCoursesBox from "../components/MandatoryCoursesBox"
import NavBar from "../components/NavBar"
import { useData } from "../hooks/useData"

export default function Home() {
    const maxPeriodNumber = 10 // Todo: Ajustar pra ser responsivo à fetchs e editavel pelo ususario

    // Estados
    const { data, addData, clearData } = useData() // Estado que controla os dados armazendos no app

    return (
        <>
            <main className={styles.main}>
                <NavBar data={data} addData={addData} clearData={clearData} />
                <MandatoryCoursesBox data={data} maxPeriodNumber={maxPeriodNumber} />
                <ElectiveCoursesBox data={data} addData={addData} />
            </main>
        </>
    )
}
