import { Typography } from "@mui/material"

export default function Footer() {
    return (
        <footer>
            <a
                href="https://mdsreq-fga-unb.github.io/2023.1-UnBnoFluxo/#colaboradores"
                target="_blank"
            >
                <Typography level="body1">Equipe</Typography>
            </a>
            <span> • </span>
            <a href="https://mdsreq-fga-unb.github.io/2023.1-UnBnoFluxo" target="_blank">
                <Typography level="body1">Documentação</Typography>
            </a>
            <span> • </span>
            <a href="https://github.com/mdsreq-fga-unb/2023.1-UnBnoFluxo" target="_blank">
                <Typography level="body1">Repositório</Typography>
            </a>
        </footer>
    )
}
