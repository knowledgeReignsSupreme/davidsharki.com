import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTeem = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledDiv>
        <h1>Hello world</h1>
        <button onClick={toggleTeem}>Hey</button>
      </StyledDiv>
    </ThemeProvider>
  );
}

const StyledDiv = styled.div`
  color: ${(props) => props.theme.header};
`;

export default App;
