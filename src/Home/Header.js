import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledDiv>
      <h1>Hello</h1>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: ${(props) => props.theme.header};
`;
