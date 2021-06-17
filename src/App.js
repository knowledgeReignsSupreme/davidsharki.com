import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';
import Home from './Home';
import Appbar from './components/Appbar';
import { FaBriefcase, FaMale } from 'react-icons/fa';
import { useWindowSize } from './hooks/useWIndowSize';

function App() {
  const [, windowHeight] = useWindowSize();

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const sections = [
    { icon: <FaBriefcase />, label: 'Portfolio', anchor: '#portfolio' },
    { icon: <FaMale />, label: 'About Me', anchor: '#me' },
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Appbar
          currentTheme={theme}
          toggleTheme={toggleTheme}
          sections={sections}
        />
        <Home currentTheme={theme} windowHeight={windowHeight} />
      </div>
    </ThemeProvider>
  );
}

export default App;
