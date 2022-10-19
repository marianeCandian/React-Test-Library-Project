import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon.js', () => {
  test('Verifica se é exibido um link com a url /pokemons/<id>', () => {
    renderWithRouter(<App />);
    const linkId = screen.getByRole('link', { name: 'More details' });
    expect(linkId).toBeInTheDocument();
  });

  test('Verifica se o card renderiza todas as informações do pokemon', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');

    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');

    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');

    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imagem = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', url);
  });

  it('Verifica se ao clicar no link de detalhes é redirecionado para a página correta', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);

    const title = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(title).toBeInTheDocument();

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Verifica se existe um ícone de estrela nos pokemons favoritos', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);
    const btnFavorite = screen.getByText(/pokémon favoritado/i);
    userEvent.click(btnFavorite);
    const star = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    const src = '/star-icon.svg';
    expect(star).toHaveAttribute('src', src);
  });
});
