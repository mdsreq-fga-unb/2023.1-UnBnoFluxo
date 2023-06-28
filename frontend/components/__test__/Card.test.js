import Card from "../Card"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

const mockCourseObr = {
    displayName: "TESTE OBRIGATORIA",
    code: "FGA0000",
    period: 5,
    alias: "TESTE",
    nature: "OBRIGATORIO",
}

it("should render the card with correct information and mandatory style", () => {
    render(<Card course={mockCourseObr} />)

    const cardElement = screen.getByTitle(
        mockCourseObr.displayName +
            "\n" +
            mockCourseObr.code +
            " / " +
            mockCourseObr.period +
            "º Per"
    )
    const aliasElement = screen.getByText(mockCourseObr.alias)
    const tipoElement = screen.getByTestId("tipo-element")

    expect(cardElement).toHaveAttribute("title", "TESTE OBRIGATORIA \nFGA0000 / 5º Per")
    expect(aliasElement).toHaveTextContent("TESTE")
    expect(tipoElement).toHaveClass("mandatory")
})

const mockCourseOpt = {
    displayName: "TESTE OPTATIVA",
    code: "FGA9999",
    period: 10,
    alias: "VALIDACAO",
    nature: "OPTATIVA",
}

it("should render the card with correct information and mandatory style", () => {
    render(<Card course={mockCourseOpt} />)

    const cardElement = screen.getByTitle(
        mockCourseOpt.displayName +
            "\n" +
            mockCourseOpt.code +
            " / " +
            mockCourseOpt.period +
            "º Per"
    )
    const aliasElement = screen.getByText(mockCourseOpt.alias)
    const tipoElement = screen.getByTestId("tipo-element")

    expect(cardElement).toHaveAttribute("title", "TESTE OPTATIVA \nFGA9999 / 10º Per")
    expect(aliasElement).toHaveTextContent("VALIDACAO")
    expect(tipoElement).toHaveClass("optative")
})
