import React from 'react';
import styled from 'styled-components';
import About from './About';
import Header from './Header';
import Projects from './Projects';

export default function index({ currentTheme, windowHeight }) {
  return (
    <>
      <Header currentTheme={currentTheme} windowHeight={windowHeight} />
      <Seperator></Seperator>
      <Projects />
      <Seperator></Seperator>
      <About />
    </>
  );
}

const Seperator = styled.div`
  margin: 4rem 0;
`;
