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

  ::selection {
      background: ${(props) => props.theme.secondary};
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


main {
  overflow-x: hidden !important;

}
`;

export const StyledLink = styled.a`
  display: block;
  margin: 0 auto;
  width: 30%;
  text-align: center;
  padding: 0.5rem 0.5rem;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.secondary} 45%,
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
