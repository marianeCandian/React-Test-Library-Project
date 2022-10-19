import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About.js', () => {
  test('Verifica se a página contém as informações sobre o jogo', () => {
    renderWithRouter(<About />);
    const texto = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
    expect(texto).toBeInTheDocument();
  });

  test('Verifica se a página contém o h2 com o título About Pokédex', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(title).toBeInTheDocument();
  });

  test('Verifica se a página contém dois parágrafos', () => {
    renderWithRouter(<About />);
    const texto = screen.getByText('One can filter Pokémons by type, and see more details for each one of them');
    expect(texto).toBeInTheDocument();
  });

  test('Verifica se a página contém a imagem da Pokédex', () => {
    renderWithRouter(<About />);
    const imagem = screen.getByRole('img');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toContain(url);
  });
});
