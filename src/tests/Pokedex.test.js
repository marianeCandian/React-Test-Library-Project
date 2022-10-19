import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex', () => {
  it('Verifica se a página contém um h2 com um texto', () => {
    renderWithRouter(<App />);
    const texto = screen.getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(texto).toBeInTheDocument();
  });

  it('Verifica se o próximo pokemon é exibido ao clicar no botão', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(button).toBeInTheDocument();
  });

  it('Verifica se é possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
  });

  it('Verifica se é mostrado apenas 1 pokemon por vez', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });

  it('Verifica se os demais botões possuem o data-testid=pokemon-type-button', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toHaveLength(7);

    const buttonFire = screen.getByRole('button', { name: 'Fire' });
    expect(buttonFire).toBeInTheDocument();
    userEvent.click(buttonFire);
    const pokemon = screen.getByText('Charmander');
    expect(pokemon).toBeInTheDocument();
  });

  it('Verifica se contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(buttonAll);
    const pokemonReset = screen.getByText('Pikachu');
    expect(pokemonReset).toBeInTheDocument();
  });
});
