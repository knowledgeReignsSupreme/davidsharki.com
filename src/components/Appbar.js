import React from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles';
import Switch from './Switch';

export default function Appbar({ currentTheme, toggleTheme }) {
  return (
    <NavWrapper currentTheme={currentTheme}>
      <StyledNav>
        <Switch currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </StyledNav>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  background: ${darkTheme.body};
  height: 4rem;
`;

const StyledNav = styled.div`
  max-width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${darkTheme.fontColor};
`;
