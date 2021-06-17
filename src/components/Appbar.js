import React from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles';
import me from '../media/me.png';

export default function Appbar({ currentTheme }) {
  return (
    <NavWrapper currentTheme={currentTheme}>
      <StyledNav></StyledNav>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  background: ${(props) =>
    props.currentTheme === 'light' ? darkTheme.body : lightTheme.body};
`;

const StyledNav = styled.div`
  max-width: 98%;
  margin: 0 auto;
`;
