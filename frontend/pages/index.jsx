import Head from "next/head"
import NavBar from "../components/NavBar"
import Period from "../components/Period"
import useLocalStorageState from "use-local-storage-state"
import styles from "../styles/Home.module.css"

export default function Home() {
    // Estados
    const [data, setData] = useLocalStorageState("data", { defaultValue: [] })

    // Callback que adiciona os elementos de "newData" ao estado "data"
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

    const clearData = () => {
        setData([])
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>UnB no Fluxo</title>
                <meta name="author" content="FluxoSquad" />
                <meta name="description" content="Fluxograma interativo dos cursos da UnB" />
                <link rel="icon" href="public/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <NavBar data={data} addData={addData} clearData={clearData} />
                {/* <h1 className={styles.title}>UnB no Fluxo</h1> */}
                <div className={styles.grid}>
                    <Period data={data} periodNumber={1} />
                    <Period data={data} periodNumber={2} />
                    <Period data={data} periodNumber={3} />
                    <Period data={data} periodNumber={4} />
                    <Period data={data} periodNumber={5} />
                    <Period data={data} periodNumber={6} />
                    <Period data={data} periodNumber={7} />
                    <Period data={data} periodNumber={8} />
                    <Period data={data} periodNumber={9} />
                    <Period data={data} periodNumber={10} />
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://github.com/mdsreq-fga-unb/2023.1-UnBnoFluxo" target="_blank">
                    Equipe • Documentação • Direitos
                </a>
            </footer>
        </div>
    )
}
