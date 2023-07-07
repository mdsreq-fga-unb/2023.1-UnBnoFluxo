import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../Footer'

it('should render the footer with repo linked into text', () => {
    render(<Footer />)
    const linkElement = screen.getByRole('link', { name: /Equipe • Documentação • Direitos/i })
    expect(linkElement).toHaveAttribute('href', 'https://github.com/mdsreq-fga-unb/2023.1-UnBnoFluxo')
});
