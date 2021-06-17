import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Header() {
  return (
    <StyledDiv typeWritedSpeed={3} typeWriterChars={13}>
      <h1>&lt;h1&gt;Hello World!&lt;/h1&gt;</h1>
      <StyledName>I'm David</StyledName>
      <StyledSubtitle>A full-stack web developer</StyledSubtitle>
    </StyledDiv>
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

const StyledDiv = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: left;
  @media (max-width: 600px) {
    place-content: initial;
  }
  h1 {
    font-size: clamp(1rem, 3vw + 1rem, 4rem);
    position: relative;
    width: max-content;

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
      background: ${(props) => props.theme.body};
      animation: ${typewriter} 2s steps(24) 1s forwards;
    }

    &::after {
      width: 0.125em;
      background: black;
      animation: ${typewriter} 2s steps(24) 1s forwards,
        ${blink} 1s steps(24) infinite;
    }

    @media (max-width: 600px) {
      max-width: 300px;
      white-space: nowrap;
      font-size: 1rem;
      &::after {
        height: 1.3rem;
      }
    }
  }
`;

const StyledName = styled.p`
  font-size: 2rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(3rem);
  animation: ${fadeInUp} 2s ease 3s forwards;
  margin-bottom: 0;
  margin-top: 0;
`;

const StyledSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(3rem);
  animation: ${fadeInUp} 2s ease 4s forwards;
`;
