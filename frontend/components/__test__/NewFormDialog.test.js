import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewFormDialog from '../NewFormDialog'
import axios from 'axios'

/* UNDER DEVELOPMENT */

describe('NewFormDialog', () => {
  // Mock do axios para simular as chamadas de API
  jest.mock('axios')
  
  // Lista fake de cursos
  const mockCoursesList = [
    { name: 'soft', endpoint: 'course-1' },
    { name: 'aero', endpoint: 'course-2' },
    { name: 'auto', endpoint: 'course-3' },  
    { name: 'ener', endpoint: 'course-4' },
    { name: 'elet', endpoint: 'course-5' }
  ]
  
  it('should render NewFormDialog and perform form submission', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockCoursesList })
    render(<NewFormDialog open={true} />)
  
    await waitFor(() => {
      expect(screen.queryByText('Para montar seu fluxograma, escolha uma das opções abaixo:')).toBeInTheDocument()
    })
  
    const mockSoft = screen.queryByText('soft')
    const mockAero = screen.queryByText('aero')
    const mockAuto = screen.queryByText('auto')

    await waitFor(() => {
      setTimeout(() => {
        fireEvent.click(mockSoft)
        fireEvent.click(mockAero)
        fireEvent.click(mockAuto)
      }, 1000) // Adjust the delay if needed
    })

    // Simula a seleção de um arquivo JSON
    const fileInput = screen.getByLabelText('Curso')
    const fileContent = JSON.stringify([{ id: 1, name: 'Step 1' }, { id: 2, name: 'Step 2' }])
    const file = new File([fileContent], 'example.json', { type: 'application/json' })
    fireEvent.change(fileInput, { target: { files: [file] } })
  
    // Verifica se o arquivo foi carregado corretamente
    expect(screen.getByText('example.json')).toBeInTheDocument()
  
    // Simula o clique no botão "Montar fluxograma"
    const assembleButton = screen.getByText('Montar fluxograma')
    fireEvent.click(assembleButton)
  
    // Verifica se a função addData foi chamada com os dados do arquivo e os cursos selecionados
    // Para esse exemplo, assumiremos que a função addData apenas console.log os dados recebidos
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledTimes(4) // Será chamado quatro vezes: 1 para o arquivo e 3 para os cursos selecionados
      expect(console.log).toHaveBeenCalledWith(fileContent)
      expect(console.log).toHaveBeenCalledWith(mockCoursesList[0])
      expect(console.log).toHaveBeenCalledWith(mockCoursesList[1])
      expect(console.log).toHaveBeenCalledWith(mockCoursesList[2])
    })
  })
})
