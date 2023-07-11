import Title from "../Title"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

/* UNDER DEVELOPMENT */

describe('Title', () => {
  it ("should render *editable* Title", () => {
    render (<Title title = {"teste"}/> )
    const titleElement = screen.getByText('teste')      //query do titulo
    fireEvent.click(titleElement)                      //simula click no titulo
    expect(titleElement).toBeInTheDocument()

  })

  it("should handle title click and change", () => {
    const setTitle = jest.fn()
    const { getByText, getByRole } = render(
    <Title editable={true} title="Initial Title" setTitle={setTitle} />        
    )
    
    const titleElement = getByText('Initial Title')                //query do title
    
    fireEvent.click(titleElement)                                 //simula click
    const inputElement = getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: "New Title" } })  //altera o texto para 'New Title'
    fireEvent.blur(inputElement)
    
    expect(setTitle).toHaveBeenCalledWith('New Title')            //testa o setTitle

    expect(titleElement).toHaveTextContent('New Title')            //confere se titulo é 'New Title'
    })
})
