import CustomButton from "../CustomButton"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

// it("should render extended button variant on mouse enter", () => {
//     render(<CustomButton text={"Teste"} />)
//     const buttonElement = screen.getByRole('button')
//     const typographyElement = buttonElement.querySelector('Typography')

//     fireEvent.mouseEnter(buttonElement)
//     expect(buttonElement).toBeTruthy()
//     expect(typographyElement).toBeInTheDocument()
//   })

// it("hides extended button on mouse leave", () => {
//     render(<CustomButton text={"Teste2"} onClick={jest.fn()} />)    //depois tentar renderizar e definir a const btn fora do bloco de teste pra ver se funciona
//     const buttonElement = screen.getByRole('button')

//     fireEvent.mouseEnter(buttonElement)
//     fireEvent.mouseLeave(buttonElement)

//     expect(buttonElement).toHaveAttribute('variant', 'round')
// })

it("calls onClick handler on button click", () => {
    const onClickMock = jest.fn()
    render(<CustomButton onClick={onClickMock} />)

    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
})