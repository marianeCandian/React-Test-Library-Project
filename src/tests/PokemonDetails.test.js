import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente PokemonDetails.js', () => {
  test('Verifica se é exibido na tela as informações do pokemon selecionado', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);
    const nameDetails = screen.getByText('Pikachu Details');
    expect(nameDetails).toHaveTextContent('Pikachu Details');
    expect(link).not.toBeInTheDocument();

    const texto = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(texto).toBeInTheDocument();

    const paragrafo = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(paragrafo).toBeInTheDocument();
  });

  it('Verifica se na página contém uma seção com os mapas', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);

    const title = screen.getByText('Game Locations of Pikachu');
    expect(title).toBeInTheDocument();

    const locations = screen.getAllByAltText(/location/i);
    expect(locations.length).toBe(2);
    expect(locations[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locations[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifica se o usuário pode favoritar o pokemon', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const checkboxText = screen.getByLabelText('Pokémon favoritado?');
    expect(checkboxText).toBeInTheDocument();
  });
});
