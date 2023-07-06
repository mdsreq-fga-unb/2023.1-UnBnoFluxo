import Title from "../Title"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

it ("should render editable Title", () => {

  render (<Title editable = {true} title = {"teste"} /> )
  const titleElement = screen.getByTitle('teste')
  //const editableElement =

  console.log(titleElement)
})