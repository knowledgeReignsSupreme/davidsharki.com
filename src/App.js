import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';
import Home from './Home';
import Appbar from './components/Appbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Appbar currentTheme={theme} />
        <Home currentTheme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
