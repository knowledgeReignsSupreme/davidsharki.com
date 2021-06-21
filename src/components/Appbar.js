import React from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles';
import { motion } from 'framer-motion';
import Switch from './Switch';
import logoDark from '../media/programmer_dark.svg';
import logoLight from '../media/programmer_light.svg';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { fadeIn } from '../Animations';

export default function Appbar({
  currentTheme,
  toggleTheme,
  sections,
  windowWidth,
  toggleDropdown,
}) {
  const determineIcon = () => {
    return currentTheme === 'light' ? <FaSun /> : <FaMoon />;
  };

  return (
    <NavWrapper>
      <StyledNav>
        {windowWidth >= 800 ? (
          <NavItems sections={sections} currentTheme={currentTheme} />
        ) : (
          <StyledBars>
            <FaBars onClick={toggleDropdown} />
          </StyledBars>
        )}
        <img
          src={currentTheme === 'light' ? logoLight : logoDark}
          alt='dark/light theme icon'
        />
        <StyledSwitch>
          {determineIcon()}
          <Switch onToggle={toggleTheme} />
        </StyledSwitch>
      </StyledNav>
    </NavWrapper>
  );
}

function NavItems({ sections, currentTheme }) {
  return (
    <ul>
      {sections.map((lab) => (
        <motion.a
          whileHover={{
            scale: 1.1,
            originX: 0,
            color:
              currentTheme === 'light'
                ? lightTheme.secondary
                : darkTheme.secondary,
          }}
          transition={{ type: 'tween', stiffness: 50 }}
          key={lab.link}
          href={lab.link}
          target={lab.isAnchor ? '_self' : '_blank'}
          rel='noreferrer'
        >
          <li>
            {lab.icon} {lab.label}
          </li>
        </motion.a>
      ))}
    </ul>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: ${darkTheme.body};
`;

const StyledNav = styled.div`
  max-width: 98%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: ${darkTheme.fontColor};

  ul {
    display: flex;
    width: 100%;

    a {
      cursor: pointer;

      + a {
        margin-left: 1rem;
      }

      svg {
        margin-right: 0.3rem;
      }
    }
  }

  img {
    width: 100%;
    height: 3rem;
    opacity: 1;
    animation: ${fadeIn} 2s;

    &:hover {
      transform: rotate(180deg);
      transition: 2s ease-out;
    }
  }
`;

const StyledBars = styled.div`
  width: 100%;

  svg {
    height: 1.5rem;
    width: 2rem;
    cursor: pointer;
  }
`;

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  svg {
    font-size: 1.2rem;
    color: ${(props) => props.theme.secondary};
    margin-right: 0.5rem;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
  }
`;
