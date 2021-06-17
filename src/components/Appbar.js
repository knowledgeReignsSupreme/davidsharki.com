import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../GlobalStyles';
import Switch from './Switch';

export default function Appbar({ currentTheme, toggleTheme, sections }) {
  return (
    <NavWrapper currentTheme={currentTheme}>
      <StyledNav>
        <ul>
          {sections.map((lab) => (
            <li>
              {lab.icon} {lab.label}
            </li>
          ))}
        </ul>
        <h4>David Sharki.</h4>
        <Switch currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </StyledNav>
    </NavWrapper>
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
