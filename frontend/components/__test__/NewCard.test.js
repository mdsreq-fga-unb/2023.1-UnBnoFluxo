import NewCard from "../NewCard";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

/* UNDER DEVELOPMENT */

describe ('NewCard', () => {
    it('should render button with correct title', () => {
        render (<NewCard/>)
        
        // const buttonElement = screen.getByRole('button')
        // expect(buttonElement).toHaveAttribute('title', 'Adicionar novo componente curricular')

    })
    
    // it('should render newcard box with detailformdialog open', () => {
    //     render (<NewCard/>)
        
    // })
})
    