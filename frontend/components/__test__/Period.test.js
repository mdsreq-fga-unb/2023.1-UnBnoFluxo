// import dynamic from "next/dynamic"

// const Period = dynamic(() => import("./Period"), { ssr: false })
// import { DragDropContext } from "react-beautiful-dnd"

// import { render, screen } from "react-beautiful-dnd-testing"
import "@testing-library/jest-dom/extend-expect"

describe("Period", () => {
    //     // Cria um array de card
    //     const mockCard = [
    //         { code: "ABC1234", period: 1, displayName: "Card 1", nature: "OBRIGATORIO" },
    //         { code: "DEF4567", period: 1, displayName: "Card 2", nature: "OPTATIVO" },
    //         { code: "GHI7890", period: 7, displayName: "Card 3", nature: "COMPLEMENTAR" },
    //     ]
    //     it("should render the Period 1 component with Cards 1 and 2 but not 3", () => {
    //         render(
    //             <DragDropContext>
    //                 <Period data={mockCard} periodNumber={1} addData={jest.fn()} />
    //             </DragDropContext>
    //         )
    //         // query dos cards
    //         const cardElements = screen.queryAllByRole("button")
    //         // Espera que a quantidade de cards seja 2 e nao 3
    //         expect(cardElements.length).toBe(2)
    //         expect(cardElements.length).not.toBe(3)
    //         // Espera que hajam card1 e card2 no componente
    //         const card1 = screen.queryByText("Card 1")
    //         expect(card1).toHaveTextContent("Card 1")
    //         const card2 = screen.queryByText("Card 2")
    //         expect(card2).toHaveTextContent("Card 2")
    //         // Espera que não haja card3
    //         const card3 = screen.queryByText("Card 3")
    //         expect(card3).not.toBeInTheDocument()
    //     })
    //     it("should render the Period component correctly with the added Card", () => {
    //         render(
    //             <DragDropContext>
    //                 <Period data={mockCard} periodNumber={7} addData={jest.fn()} />
    //             </DragDropContext>
    //         )
    //         // query dos cards
    //         const cardElements = screen.queryAllByRole("button")
    //         // Espera que haja 1 cards no period 7 e nao haja 3 nem 2
    //         expect(cardElements.length).toBe(1)
    //         expect(cardElements.length).not.toBe(3 || 2)
    //         // Espera que hajam card1 e card2
    //         const card1 = screen.queryByText("Card 1")
    //         expect(card1).not.toBeInTheDocument()
    //         const card2 = screen.queryByText("Card 2")
    //         expect(card2).not.toBeInTheDocument()
    //         // Espera que haja card3
    //         const card3 = screen.queryByText("Card 3")
    //         expect(card3).toHaveTextContent("Card 3")
    //     })
})
