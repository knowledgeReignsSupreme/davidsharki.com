import { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';
import Home from './Home';
import Appbar from './components/Appbar';
import { FaBriefcase, FaMale } from 'react-icons/fa';
import { useWindowSize } from './hooks/useWIndowSize';
import Dropdown from './components/Dropdown';
import useClickOutside from './hooks/useClickOutside';

function App() {
  const [windowWidth, windowHeight] = useWindowSize();
  const dropdownRef = useRef(null);

  const [theme, setTheme] = useState('dark');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  useClickOutside(dropdownRef, closeDropdown);

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
          windowWidth={windowWidth}
          toggleDropdown={toggleDropdown}
        />
        <Dropdown
          show={showDropdown}
          dropdownRef={dropdownRef}
          closeDropdown={closeDropdown}
          sections={sections}
          windowWidth={windowWidth}
        />
        <Home currentTheme={theme} windowHeight={windowHeight} />
      </div>
    </ThemeProvider>
  );
}

export default App;
