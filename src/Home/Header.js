import React from 'react';
import styled, { keyframes } from 'styled-components';
import IDE from '../media/IDE.png';
import { useWindowSize } from '../hooks/useWIndowSize';

export default function Header({ currentTheme, windowHeight }) {
  return (
    <StyledHero currentTheme={currentTheme}>
      <StyledDiv
        currentTheme={currentTheme}
        style={{ height: windowHeight - 80 - 48 }}
      >
        <h1>
          <span>&lt;h1&gt;</span>Hello World!<span>&lt;/h1&gt;</span>
        </h1>
        <StyledName>I'm David.</StyledName>
        <StyledSubtitle>A full-stack web developer</StyledSubtitle>
      </StyledDiv>
    </StyledHero>
  );
}

const typewriter = keyframes`
    to {
    left: 100%;
  }
`;

const blink = keyframes`
  to {
    background: transparent;
  }
`;

const fadeInUp = keyframes`
    to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHero = styled.header`
  position: relative;
  min-height: 100vh;
  width: 100%;

  &::after {
    content: '';
    background: url(${IDE}) no-repeat center center/cover;
    opacity: ${(props) => (props.currentTheme === 'dark' ? 0.5 : 0.12)};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    min-height: 18rem;
    box-shadow: 0 7px 2px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
      background-position: left;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: clamp(1rem, 4vw + 1rem, 4rem);
    position: relative;
    width: max-content;
    color: ${(props) => props.theme.header};

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &::before {
      background-color: ${(props) =>
        props.currentTheme === 'light' ? '#F0F0F0' : '#101010'};
      animation: ${typewriter} 2s steps(24) 1s forwards;
    }

    &::after {
      width: 0.125em;
      background: ${(props) => props.theme.header};
      animation: ${typewriter} 2s steps(24) 1s forwards,
        ${blink} 1s steps(24) infinite;
    }

    span {
      font-size: clamp(0.9rem, 1vw + 1rem, 4rem);
    }
  }

  p {
    font-size: clamp(1rem, 2vw + 1rem, 3.4rem);
    margin-top: 0.3rem;
    opacity: 0;
    transform: translateY(3rem);
  }
`;

const StyledName = styled.p`
  animation: ${fadeInUp} 2s ease 3s forwards;
`;

const StyledSubtitle = styled.p`
  animation: ${fadeInUp} 2s ease 4s forwards;
`;
