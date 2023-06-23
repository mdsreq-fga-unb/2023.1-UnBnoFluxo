import Card from "../Card"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

const mockCourseObr = {
  code: "FGA0000",
  period: 5,
  alias: "teste",
  nature: "OBRIGATORIO",
}

it("should render the card with correct information and mandatory style", () => {
  render(<Card course={mockCourseObr} />)

  const cardElement = screen.getByTitle(`${mockCourseObr.code} / ${mockCourseObr.period}º Per`)
  const aliasElement = screen.getByText(mockCourseObr.alias)
  const tipoElement = screen.getByTestId("tipo-element");

  expect(cardElement).toHaveAttribute("title", "FGA0000 / 5º Per")
  expect(aliasElement).toHaveTextContent("teste")
  expect(tipoElement).toHaveClass("mandatory");
  
})

const mockCourseOpt = {
    code: "FGA9999",
    period: 10,
    alias: "validacao",
    nature: "OPTATIVA",
  }
  
  it("should render the card with correct information and mandatory style", () => {
    render(<Card course={mockCourseOpt} />)
  
    const cardElement = screen.getByTitle(`${mockCourseOpt.code} / ${mockCourseOpt.period}º Per`)
    const aliasElement = screen.getByText(mockCourseOpt.alias)
    const tipoElement = screen.getByTestId("tipo-element");
  
    expect(cardElement).toHaveAttribute("title", "FGA9999 / 10º Per")
    expect(aliasElement).toHaveTextContent("validacao")
    expect(tipoElement).toHaveClass("optative");
    
  })