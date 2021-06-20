import React, { useState } from 'react';
import {
  FaArrowRight,
  FaAt,
  FaFilePdf,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

const slideFromLeft = keyframes`
from {
  transform: translateX(-100px);

}
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
from {
  opacity: 0;

}
  to {
    opacity: 1;
  }
`;

export default function MediaLinks({ show, setShowMediaLinks }) {
  const [SlideDrawer, setSlideDrawer] = useState(true);

  const closeDrawer = () => {
    setSlideDrawer(false);
    setShowMediaLinks(false);
  };

  return show ? (
    <StyledMediaLinks SlideDrawer={SlideDrawer}>
      <button onClick={closeDrawer}>
        <FaTimes />
      </button>
      <a
        href='https://www.linkedin.com/in/david-sharki-925892204/'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin />
      </a>
      <a href='/cv.pdf' target='_blank' rel='noreferrer'>
        <FaFilePdf />
      </a>
      <a href='mailto: david17895@gmail.com' target='_blank' rel='noreferrer'>
        <FaAt />
      </a>
    </StyledMediaLinks>
  ) : (
    <StyledToggle onClick={() => setShowMediaLinks(true)}>
      <FaArrowRight />
    </StyledToggle>
  );
}

const StyledDrawer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 45%;
  z-index: 10;
  width: max-content;
  height: max-content;
  padding: 0.05rem 0.1rem;
  background: ${(props) => props.theme.fontColor};
  border-radius: 10px;

  animation: ${(props) =>
    props.animateDrawer
      ? css`
          ${slideFromLeft} 8s ease-out
        `
      : css`
          ${fadeIn} 1s ease-out
        `};
`;

const StyledMediaLinks = styled(StyledDrawer)`
  a {
    color: ${(props) => props.theme.main};
    display: block;
    padding: 0.4rem 0.6rem;
    + a {
      margin-top: 0.5rem;
    }
    svg {
      font-size: calc(1rem + 1vw);
    }
  }

  button {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.main};
    border-radius: 15px;
    float: right;
    margin-bottom: 0.7rem;
    padding: 0.15rem 0.3rem;
    cursor: pointer;

    svg {
      vertical-align: middle;
    }
  }
`;

const StyledToggle = styled(StyledDrawer)`
  padding-left: 5px;
  background: transparent;
  cursor: pointer;

  svg {
    font-size: calc(1rem + 1vw);
    color: ${(props) => props.theme.main};
  }
`;
