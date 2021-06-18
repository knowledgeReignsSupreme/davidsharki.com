import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Projects from './Projects';

export default function index({ currentTheme, windowHeight }) {
  return (
    <>
      <Header currentTheme={currentTheme} windowHeight={windowHeight} />
      <Seperator></Seperator>
      <Projects />
    </>
  );
}

const Seperator = styled.div`
  margin: 2rem 0;
  background-color: blue;
  color: green;
`;
