import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente App.js', () => {
  test('Se é direcionada para url / ao clicar em home', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('Se é direcionada para url /about ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  test('Se é direcionada para url /favorites ao clicar em Pokémons Favoritado', () => {
    const { history } = renderWithRouter(<App />);

    const favoritesLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favoritesLink).toBeInTheDocument();
    userEvent.click(favoritesLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  test('Se é direcionada para página Not Found se a url for desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/xablau');
    });
    const { location: { pathname } } = history;
    expect(pathname).toBe('/xablau');
  });
});
