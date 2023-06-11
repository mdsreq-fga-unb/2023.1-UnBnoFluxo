import "../styles/globals.css"
import Head from "next/head"
import Footer from "../components/Footer"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>UnB no Fluxo</title>
                <meta name="author" content="FluxoSquad" />
                <meta name="description" content="Fluxograma interativo dos cursos da UnB" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
