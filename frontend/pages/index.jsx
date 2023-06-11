import Head from "next/head"
import useLocalStorageState from "use-local-storage-state"
import styles from "../styles/Home.module.css"

import NavBar from "../components/NavBar"
import ElectiveCoursesBox from "../components/ElectiveCoursesBox"
import MandatoryCoursesBox from "../components/MandatoryCoursesBox"

export default function Home() {
    const maxPeriodNumber = 10 // Todo: Ajustar pra ser responsivo à fetchs e editavel pelo ususario

    // Estados
    const [data, setData] = useLocalStorageState("data", { defaultValue: [] })

    // Funcao callback que adiciona os elementos de "newData" ao estado "data"
    const addData = (newData) => {
        setData((prevData) => {
            // "nextData" recebe tudo que ainda nao existe em "data"
            const nextData = newData.filter((course) => {
                return !prevData.some((storedCourse) => {
                    return JSON.stringify(storedCourse) === JSON.stringify(course)
                })
            })
            return [...prevData, ...nextData]
        })
    }

    // Funcao que limpa os dados do app
    const clearData = () => setData([])

    return (
        <>
            <Head>
                <title>UnB no Fluxo</title>
                <meta name="author" content="FluxoSquad" />
                <meta name="description" content="Fluxograma interativo dos cursos da UnB" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <NavBar data={data} addData={addData} clearData={clearData} />
                <MandatoryCoursesBox data={data} maxPeriodNumber={maxPeriodNumber} />
                <ElectiveCoursesBox data={data} />
            </main>

            <footer className={styles.footer}>
                <a href="https://github.com/mdsreq-fga-unb/2023.1-UnBnoFluxo" target="_blank">
                    Equipe • Documentação • Direitos
                </a>
            </footer>
        </>
    )
}
