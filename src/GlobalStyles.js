import styled, { createGlobalStyle } from 'styled-components';

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

export const StyledLink = styled.a`
  display: block;
  margin: 0 auto;
  width: 30%;
  text-align: center;
  padding: 0.5rem 0.5rem;
  background: ${(props) => props.theme.secondary};
  background: linear-gradient(
    to left,
    ${(props) => props.theme.secondary},
    ${(props) => props.theme.main}
  );
`;

export const lightTheme = {
  body: '#fff',
  fontColor: '#3a3939',
  main: '#FF884B',
  secondary: '#E5D549',
};

export const darkTheme = {
  fontColor: '#D8E3E7',
  body: '#202020',
  main: '#51C4D3',
  secondary: '#867AE9',
};
