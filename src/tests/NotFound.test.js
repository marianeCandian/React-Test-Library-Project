import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente NotFound.js', () => {
  test('Verifica se a página contém aum h2 com um texto', () => {
    renderWithRouter(<NotFound />);
    const texto = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(texto).toBeInTheDocument();
  });

  test('Verifica se a página contém a imagem do pokemon chorando', () => {
    renderWithRouter(<NotFound />);
    const imagem = screen.getByRole('img');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toContain(url);
  });
});
