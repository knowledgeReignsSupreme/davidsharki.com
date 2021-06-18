import { useRef, useState } from 'react';
import { useWindowSize } from './hooks/useWIndowSize';
import useClickOutside from './hooks/useClickOutside';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';

import Home from './Home';
import Appbar from './components/Appbar';
import Dropdown from './components/Dropdown';
import { FaBriefcase, FaFilePdf, FaMale } from 'react-icons/fa';
import MediaLinks from './components/MediaLinks';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();
  const dropdownRef = useRef(null);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  useClickOutside(dropdownRef, closeDropdown);

  const sections = [
    { icon: <FaBriefcase />, label: 'Portfolio', anchor: '#portfolio' },
    { icon: <FaMale />, label: 'About Me', anchor: '#me' },
    { icon: <FaFilePdf />, label: 'CV', anchor: '/cv.pdf' },
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <MediaLinks />
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
