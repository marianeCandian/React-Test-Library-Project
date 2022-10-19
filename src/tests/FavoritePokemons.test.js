import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About.js', () => {
  test('Verifica se a página exibe uma mensagem caso não existe nenhum pokemon como favorito', () => {
    renderWithRouter(<FavoritePokemons />);
    const texto = screen.getByText('No favorite pokemon found');
    expect(texto).toBeInTheDocument();
  });
});
