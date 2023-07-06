import Title from "../Title"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

it ("should render editable Title", () => {

  render (<Title title = {"teste"}/> )
  const titleElement = screen.getByText('teste')
  //const editableElement = screen.

  expect(titleElement).toHaveText('teste')
})

/*

it("calls onClick handler on Title click", () => {
  const handleTitleClickMock = jest.fn();
  render(<Title editable={true} onClick={handleTitleClickMock} />);
  const titleElement = screen.getByText("teste");

  fireEvent.click(titleElement);
  expect(handleTitleClickMock).toHaveBeenCalled();
});

//

it("should handle title click and change", () => {
  // Arrange
  const setTitle = jest.fn();
  const { getByText, getByRole } = render(
  <Title editable={true} title="Initial Title" setTitle={setTitle} />
  );
  
  const titleElement = getByText("Initial Title");
  
  // Act
  fireEvent.click(titleElement);
  const inputElement = getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "New Title" } });
  fireEvent.blur(inputElement);
  
  // Assert
  expect(setTitle).toHaveBeenCalledWith("New Title");
  });
*/