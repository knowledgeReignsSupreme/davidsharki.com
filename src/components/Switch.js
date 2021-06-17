import React from 'react';
import styled from 'styled-components';

export default function Switch({ currentTheme, toggleTheme }) {
  return (
    <SwitchWrapper>
      {/* <p>{currentTheme === 'light' ? 'Light Theme' : 'Dark Theme'}</p> */}
      <StyledSwitch currentTheme={currentTheme}>
        <input type='checkbox' onChange={toggleTheme} />
        <span />
      </StyledSwitch>
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  transition: 0.4s;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.currentTheme === 'dark' ? 'gray' : 'white'};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background: ${(props) =>
        props.currentTheme === 'dark' ? 'white' : 'orange'};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span::before {
    transform: translateX(27px);
  }
`;
