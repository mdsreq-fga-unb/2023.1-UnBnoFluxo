import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewFormDialog from '../NewFormDialog'
import axios from 'axios'

/* UNDER DEVELOPMENT */

describe('Fetch API Test', () => {
  // mock do axios pra simular a chamada de API
  jest.mock('axios')
  
  // Curso fake
  const mockCourse = [{ name: 'soft', endpoint: 'course-1' }]

  
  it('should render NewFormDialog and perform form submission', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockCourse })
    render(<NewFormDialog open={true} />) 
    
    expect(axios.get).toHaveBeenCalledWith('https://unbnofluxo.uk/api/courses')
    await waitFor(() => {
      expect(screen.queryByText('Para montar seu fluxograma, escolha uma das opções abaixo:')).toBeInTheDocument()
    })
  
    // const mockSoft = screen.getByText('soft')

    // expect(mockSoft).toBeInTheDocument()
  })
})
