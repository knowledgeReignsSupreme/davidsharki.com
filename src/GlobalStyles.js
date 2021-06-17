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
  

`;

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
  header: 'blue',
};

export const darkTheme = {
  fontColor: '#fff',
  body: '#000',
  header: 'lightblue',
};
