import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewFormDialog from '../NewFormDialog'
import axios from 'axios'

/* UNDER DEVELOPMENT */

describe('NewFormDialog', () => {
 

  // Mock do axios para simular as chamadas de API
  jest.mock('axios')
  
  const mockCoursesList = [
    { name: 'Course 1', endpoint: 'course-1' },
    { name: 'Course 2', endpoint: 'course-2' },
    // Adicione mais cursos de exemplo, se necessário
  ];
  
  it('should render NewFormDialog and performs form submission', async () => {
    // Simula uma resposta bem-sucedida da API com a lista de cursos disponíveis
    axios.get.mockResolvedValueOnce({ data: mockCoursesList })
  
    render(<NewFormDialog open={true} onClose={() => {}} addData={() => {}} />)
  
    // Aguarda até que a chamada à API seja realizada e os cursos sejam carregados
    await waitFor(() => {
      expect(screen.queryByText('Para montar seu fluxograma, escolha uma das opções abaixo:')).toBeInTheDocument()
    })
  
    // Seleciona os cursos de exemplo na caixa de seleção
    const course1 = screen.findByText('Course 1')
    const course2 = screen.findByText('Course 2')
    fireEvent.click(course1)
    fireEvent.click(course2)
  
    // Simula a seleção de um arquivo JSON (pode ser um arquivo real ou fictício)
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
      expect(console.log).toHaveBeenCalledTimes(3) // Será chamado três vezes: 1 para o arquivo e 2 para os cursos selecionados
      expect(console.log).toHaveBeenCalledWith(fileContent)
      expect(console.log).toHaveBeenCalledWith(mockCoursesList[0])
      expect(console.log).toHaveBeenCalledWith(mockCoursesList[1])
    })
  })

})
