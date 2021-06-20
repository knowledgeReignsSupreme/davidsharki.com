import React from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';
import { darkTheme } from '../GlobalStyles';
import Switch from './Switch';

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
          <NavItems sections={sections} />
        ) : (
          <StyledBars>
            <FaBars onClick={toggleDropdown} />
          </StyledBars>
        )}
        <h4>David Sharki.</h4>
        <StyledSwitch>
          {determineIcon()}
          <Switch onToggle={toggleTheme} />
        </StyledSwitch>
      </StyledNav>
    </NavWrapper>
  );
}

function NavItems({ sections }) {
  return (
    <ul>
      {sections.map((lab) => (
        <a href={lab.anchor}>
          <li>
            {lab.icon} {lab.label}
          </li>
        </a>
      ))}
    </ul>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  background: ${darkTheme.body};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`;

const StyledNav = styled.div`
  max-width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
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

  h4 {
    width: 100%;
    color: ${(props) => props.theme.main};
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
  align-content: center;
  svg {
    font-size: 1.2rem;
    color: ${(props) => props.theme.secondary};
    margin-right: 0.5rem;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
  }
`;
