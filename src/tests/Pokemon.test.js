import { screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon.js', () => {
  test('Verifica se é exibido um link com a url /pokemons/<id>', () => {
    renderWithRouter(<Pokemon />);
    const linkId = screen.getByRole('link', { name: 'More details' });
    expect(linkId).toBeInTheDocument();
  });

  // test('Verifica se a imagem do pokemon possui o src correto', () => {
  //   renderWithRouter(<Pokemon />);
  //   const imagem = screen.getByRole('img');
  //   expect(imagem).toBeInTheDocument();
  //   expect(imagem.src).toContain();
  // });
});
