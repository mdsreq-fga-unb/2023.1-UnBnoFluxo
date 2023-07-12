import Tip from "../Tip"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

/* UNDER DEVELOPMENT */

describe ('Tip', () => {
    it('should render Tip with correct bgc and errorMsg when errorMessage is defined', () => {
        render(<Tip errorMessage={{ message: 'TestErrorMsg' }} />)

        const boxElement = screen.getByTestId('tipo-box')                                        //query do <Box/>
        expect(boxElement).toHaveStyle({ background: "#DB3B4B" })
        expect(boxElement).toHaveTextContent('TestErrorMsg')                                     //testa se ta renderizando a mensagem de erro
        expect(boxElement).not.toHaveTextContent('AnyThinElse')                                  //testa se não renderiza qualquer outra coisa que não a mensagem de erro
    })

    it('should render Tip with correct bgc and text when errorMessage is UNdefined', () => {
        render(<Tip text={'TesteFalse'} />)

        const boxElement = screen.getByTestId('tipo-box')
        expect(boxElement).toHaveStyle({ background: "#232323" })
        expect(boxElement).toHaveTextContent('TesteFalse')
        expect(boxElement).not.toHaveTextContent('AnyThinElse')
    })    

    it('should render ReportSharpIcon when errorMessage is true', () => {
        render(<Tip text={'TesteTrue'} errorMessage={{ message: 'TestErrorMsg' }} />)

        const reportIcon = screen.getByTestId('ReportSharpIcon')                      //query do reportIcon - descobri esse testid inspecionando no browser,
        expect(reportIcon).toBeInTheDocument()                                        //entao pelo visto alguns componentes do  muimaterial ja tem essa prop pra teste
    })

    it('should render HelpSharpIcon when errorMessage is undefined', () => {
        render(<Tip text={'TesteFalse'} errorMessage={ undefined } />)

        const helpIcon = screen.getByTestId('HelpSharpIcon')                         //query do helpIcon
        expect(helpIcon).toBeInTheDocument()
    })
})
    