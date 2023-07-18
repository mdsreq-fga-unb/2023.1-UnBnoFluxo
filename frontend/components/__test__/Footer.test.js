import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Footer from "../Footer"

it("should render the footer with correct links", () => {
    render(<Footer />)
    const linkElement1 = screen.getByRole("link", { name: /Equipe/i })
    expect(linkElement1).toHaveAttribute(
        "href",
        "https://mdsreq-fga-unb.github.io/2023.1-UnBnoFluxo/#colaboradores"
    )
    const linkElement2 = screen.getByRole("link", { name: /Documentação/i })
    expect(linkElement2).toHaveAttribute(
        "href",
        "https://mdsreq-fga-unb.github.io/2023.1-UnBnoFluxo"
    )
    const linkElement3 = screen.getByRole("link", { name: /Repositório/i })
    expect(linkElement3).toHaveAttribute(
        "href",
        "https://github.com/mdsreq-fga-unb/2023.1-UnBnoFluxo"
    )
})
