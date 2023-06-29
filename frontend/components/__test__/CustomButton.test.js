import CustomButton from "../CustomButton"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

it("should render extended button variant with expected text on mouseEnter", () => {
    render(<CustomButton text={'TestText'} />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeTruthy()

    fireEvent.mouseEnter(buttonElement) //o useState tem valor default true, então esse teste passaria mesmo sem essa instrução
   
    const typographyElement = screen.getByText('TestText')
    expect(typographyElement).toBeTruthy()
    expect(buttonElement).toHaveClass('MuiFab-extended')    //https://mui.com/material-ui/api/fab/#css
})

it("hides extended button on mouse leave", () => {
    render(<CustomButton text={'TesteLeave'} />)
    const buttonElement = screen.getByRole('button')
    
    fireEvent.mouseEnter(buttonElement)
    fireEvent.mouseLeave(buttonElement)
    
    const typographyElement = screen.queryByText('TesteLeave')
    expect(buttonElement).not.toHaveClass('MuiFab-extended')    //espera-se NÃO ter a classe MuiFab-extended após o mouseLeave
    expect(typographyElement).toBeNull()                        //espera-se que não haja o texto TesteLeave após o mouseLeave então o queryByText retorna Null
})

it("calls onClick handler on button click", () => {
    const onClickMock = jest.fn()
    render(<CustomButton onClick={onClickMock} />)

    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalled()
})