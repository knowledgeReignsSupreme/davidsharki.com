import React from 'react';
import styled from 'styled-components';
import { blink, fadeInUp, typewriter } from '../Animations';
import IDE from '../media/IDE.png';

export default function Header({ currentTheme, windowHeight }) {
  return (
    <StyledHero currentTheme={currentTheme}>
      <StyledContent
        currentTheme={currentTheme}
        style={{ height: windowHeight - 80 - 48 }}
      >
        <h1>
          <span>&lt;h1&gt;</span>Hello World!<span>&lt;/h1&gt;</span>
        </h1>
        <StyledName>Hi, I'm David</StyledName>
        <StyledSubtitle>A full-stack web developer</StyledSubtitle>
      </StyledContent>
    </StyledHero>
  );
}

const StyledHero = styled.header`
  position: relative;
  width: 100%;
  min-height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-height: 16rem;
    z-index: -1;
    box-shadow: 0 7px 2px rgba(0, 0, 0, 0.3);

    background: url(${IDE}) no-repeat center center/cover;
    opacity: ${(props) => (props.currentTheme === 'dark' ? 0.3 : 0.12)};

    @media (max-width: 600px) {
      background-position: left;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: clamp(1rem + 3vw, 1rem + 50%, 4rem);

    position: relative;
    width: max-content;
    color: ${(props) => props.theme.main};

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
      background: ${(props) => props.theme.main};
      animation: ${typewriter} 2s steps(24) 1s forwards,
        ${blink} 1s steps(24) infinite;
    }

    span {
      font-size: clamp(0.9rem, 1vw + 1rem, 4rem);
    }
  }

  p {
    font-size: clamp(1rem + 1vw, 1rem + 20%, 3.2rem);
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
