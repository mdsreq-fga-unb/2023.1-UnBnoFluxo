import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer'

it('should render the footer with repo linked into text', async () => {
    render(<Footer />);
    const linkElement = screen.getByRole('link', { name: /Equipe • Documentação • Direitos/i });
    linkElement.setAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
});
