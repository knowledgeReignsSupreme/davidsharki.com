import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { fadeIn, slideFromLeft } from '../Animations';
import {
  FaArrowRight,
  FaAt,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import { reportEvent } from '../Analytics';

export default function MediaLinks({ show, setShowMediaLinks }) {
  const [SlideDrawer, setSlideDrawer] = useState(true);

  const closeDrawer = () => {
    setSlideDrawer(false);
    setShowMediaLinks(false);
  };

  return show ? (
    <StyledMediaLinks SlideDrawer={SlideDrawer}>
      <FaTimes onClick={closeDrawer} className='close' />
      <a
        href='https://www.linkedin.com/in/david-sharki-925892204/'
        target='_blank'
        rel='noreferrer'
        onClick={() =>
          reportEvent('Media links', 'User clicked the Linkedin button')
        }
      >
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/knowledgeReignsSupreme'
        target='_blank'
        rel='noreferrer'
        onClick={() =>
          reportEvent('Media links', 'User clicked the Github button')
        }
      >
        <FaGithub />
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
  opacity: 0.7;

  a {
    display: block;
    padding: 0.4rem 0.6rem;
    color: ${(props) => props.theme.secondary};

    + a {
      margin-top: 0.5rem;
    }
    svg:not(first-of-type) {
      font-size: calc(1rem + 1vw);
    }
  }

  .close {
    float: right;
    width: 1.7rem;
    height: 1.7rem;
    margin-bottom: 0.7rem;
    padding: 0.15rem 0.3rem;
    color: ${(props) => props.theme.secondary};
    border-radius: 15px;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const StyledToggle = styled(StyledDrawer)`
  background: transparent;
  cursor: pointer;

  svg {
    font-size: calc(1rem + 1vw);
    color: ${(props) => props.theme.main};
  }
`;
