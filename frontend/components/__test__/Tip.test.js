import Tip from "../Tip"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

/* UNDER DEVELOPMENT */

describe ('Tip', () => {

    it('should render Tip with "#DB3B4B" bgcolor when errorMode is true', () => {
        render(<Tip text={'TesteTrue'} errorMode={ true } />)

        const boxElement = screen.getByTestId('tipo-box')                                        //query do <Box/>
        expect(boxElement).toHaveStyle({ background: "#DB3B4B" })
    })

    it('should render Tip with "#232323" bgcolor when errorMode is undefined', () => {
        render(<Tip text={'TesteFalse'} errorMode={ undefined } />)

        const boxElement = screen.getByTestId('tipo-box')
        expect(boxElement).toHaveStyle({ background: "#232323" })
    })    

    // it('should render ReportSharpIcon when isErrorMode is true', () => {
    //     render(<Tip text={'TesteTrue'} errorMode={ true } />)

    //     const reportIcon = screen.getByRole('img', { name: /report icon/i })                    //query do reportIcon
    //     expect(reportIcon).toBeInTheDocument()
    // })

    // it('should render HelpSharpIcon when isErrorMode is undefined', () => {
    //     render(<Tip text={'TesteFalse'} errorMode={ undefined } />)

    //     const helpIcon = screen.getByRole('img', { name: /help icon/i })                        //query do helpIcon
    //     expect(helpIcon).toBeInTheDocument()
    // })
})
    