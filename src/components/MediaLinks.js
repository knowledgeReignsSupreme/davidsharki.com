import React from 'react';
import { FaAt, FaFilePdf, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

export default function MediaLinks() {
  return (
    <StyledMediaLinks>
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
  );
}

const StyledMediaLinks = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 50%;
  z-index: 10;
  width: max-content;
  height: max-content;
  background: ${(props) => props.theme.fontColor};
  padding: 0.3rem 0.6rem;
  border-radius: 10px;

  a {
    font-size: 1.5rem;
    color: ${(props) => props.theme.main};
    display: block;

    + a {
      margin-top: 0.5rem;
    }
  }
`;
