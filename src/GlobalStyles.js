import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    font-family: 'roboto', sans-serif;
  }

  h1 {
    font-family: "Source Code Pro", monospace;
  }

  img {
    max-width: 100%;
  }

  ul{
    list-style: none;
  }

  li {
    text-decoration: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

`;

export const lightTheme = {
  body: '#fff',
  fontColor: '#3a3939',
  main: '#344FA1',
  secondary: '#FF884B',
};

export const darkTheme = {
  fontColor: '#D8E3E7',
  body: '#202020',
  main: '#51C4D3',
  secondary: '#AAAAAA',
};
