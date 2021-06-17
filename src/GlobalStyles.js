import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * *::after *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: "Source Code Pro", monospace;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }

`;

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
  header: 'purple',
};

export const darkTheme = {
  fontColor: '#fff',
  body: '#000',
  header: 'yellow',
};
