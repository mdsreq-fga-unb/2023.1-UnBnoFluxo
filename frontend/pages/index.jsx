import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Period from '../components/Period';

export default function Home() {
    // Estados
    const [data, setData] = useState(null);

    // Fazendo request na api e salvando dados no estado "data"
    useEffect(() => {

        // Criando funcao assincrona que vai fazer o fetch na api
        const fetchData = async () => {
            const response = await fetch('/api/teste');
            const data = await response.json();
            setData(data);
            console.log(data);
        };

        fetchData(); // Chamando funcao assincrona
    }, []); // Ao deixar o segundo paramentro vazio, o fetch na api so acontece quando Home carrega


    return (
        <div className={styles.container}>
            <Head>
                <title>UnB no Fluxo</title>
                <meta name="author" content="FluxoSquad" />
                <meta name="description" content="Fluxograma interativo dos cursos da UnB" />
                <link rel="icon" href="public/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>UnB no Fluxo</h1>
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
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="public/favicon.svg" alt="UnB no Fluxo Icone" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
