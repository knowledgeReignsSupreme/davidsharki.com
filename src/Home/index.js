import React from 'react';
import Header from './Header';

export default function index({ currentTheme, windowHeight }) {
  return <Header currentTheme={currentTheme} windowHeight={windowHeight} />;
}
