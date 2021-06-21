import { useRef, useState } from 'react';
import { useWindowSize } from './hooks/useWIndowSize';
import useClickOutside from './hooks/useClickOutside';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './GlobalStyles';

import Home from './Home';
import Appbar from './components/Appbar';
import Dropdown from './components/Dropdown';
import MediaLinks from './components/MediaLinks';
import { FaBriefcase, FaFilePdf, FaMale } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMediaLinks, setShowMediaLinks] = useState(true);

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
    {
      icon: <FaBriefcase />,
      label: 'Projects',
      link: '#projects',
      isAnchor: true,
    },
    { icon: <FaMale />, label: 'About Me', link: '#me', isAnchor: true },
    { icon: <FaFilePdf />, label: 'CV', link: '/cv.pdf', isAnchor: false },
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <main>
        <MediaLinks
          show={showMediaLinks}
          setShowMediaLinks={setShowMediaLinks}
        />
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
          currentTheme={theme}
        />
        <Home currentTheme={theme} windowHeight={windowHeight} />
      </main>
    </ThemeProvider>
  );
}

export default App;
