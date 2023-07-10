import Tip from "../Tip"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

/* UNDER DEVELOPMENT */

describe("Tip", () => {
    it('should render Tip with "#DB3B4B" bg color when errorMode is true', () => {
        render(<Tip text={"TesteTrue"} />)

        //     const boxElement = screen.getByTestId('tip-box')
        //     expect(boxElement).toHaveStyle({background: "#DB3B4B"})
        // })

        // it('should render Tip with "#232323" bg color when errorMode is false', () => {
        //     render (<Tip text={'TesteFalse'}  />)

        //     const boxElement = screen.getByLabelText('TesteFalse')
        //     expect(boxElement).toHaveStyle({background: "#232323"})
    })
})
