import React from 'react';
import { FaBars } from 'react-icons/fa';
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
  return (
    <NavWrapper currentTheme={currentTheme}>
      <StyledNav>
        {windowWidth >= 600 ? (
          <NavItems sections={sections} />
        ) : (
          <StyledBars>
            <FaBars onClick={toggleDropdown} />
          </StyledBars>
        )}
        <h4>David Sharki.</h4>
        <Switch currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </StyledNav>
    </NavWrapper>
  );
}

function NavItems({ sections }) {
  return (
    <ul>
      {sections.map((lab) => (
        <li>
          {lab.icon} {lab.label}
        </li>
      ))}
    </ul>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  background: ${darkTheme.body};
`;

const StyledNav = styled.div`
  max-width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  color: ${darkTheme.fontColor};
  font-weight: 400;

  ul {
    display: flex;
    width: 100%;

    svg {
      margin-right: 0.3rem;
    }

    li {
      cursor: pointer;
    }

    li + li {
      margin-left: 1rem;
    }
  }

  h4 {
    width: 100%;
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
