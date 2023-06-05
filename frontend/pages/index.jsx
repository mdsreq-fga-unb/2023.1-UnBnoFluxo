import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useState, useEffect } from "react"
import Period from "../components/Period"
import NavBar from "../components/NavBar"

export default function Home() {
    // Estados
    const [data, setData] = useState([])

    // Fazendo request na api e salvando dados no estado "data" e no local storage
    useEffect(() => {
        const storageData = localStorage.getItem("data")
        // Criando funcao assincrona que vai fazer o fetch na api // Todo: revover essa funcao depois quando o app suportar ser carregado em branco
        const fetchData = async () => {
            const response = await fetch("/api/soft")
            const data = await response.json()
            setData(data)

            localStorage.setItem("data", JSON.stringify(data))
        }

        if (storageData) {
            setData(JSON.parse(storageData))
        } else {
            fetchData() // Chamando funcao assincrona
        }
    }, []) // Ao deixar o segundo paramentro vazio, o fetch na api so acontece quando Home carrega

    return (
        <div className={styles.container}>
            <Head>
                <title>UnB no Fluxo</title>
                <meta name="author" content="FluxoSquad" />
                <meta name="description" content="Fluxograma interativo dos cursos da UnB" />
                <link rel="icon" href="public/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <NavBar setData={setData} />
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
