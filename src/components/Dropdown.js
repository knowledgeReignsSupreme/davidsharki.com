import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../GlobalStyles';

export default function Dropdown({
  show,
  dropdownRef,
  closeDropdown,
  sections,
  windowWidth,
}) {
  return !show
    ? null
    : show && windowWidth <= 800 && (
        <StyledDropdown ref={dropdownRef}>
          <ul>
            {sections.map((section) => (
              <a href={section.anchor}>
                <li key={section.label} onClick={closeDropdown}>
                  {section.icon} {section.label}
                </li>
              </a>
            ))}
          </ul>
        </StyledDropdown>
      );
}

const StyledDropdown = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  background: ${darkTheme.body};
  color: ${darkTheme.fontColor};
  z-index: 10;
  position: sticky;
  top: 4rem;
  left: 0;

  a {
    cursor: pointer;
    padding: 0.3rem 0.6rem;

    + a {
      margin-top: 0.7rem;
    }

    li {
      margin-left: 1rem;
    }
  }

  svg {
    margin-right: 0.3rem;
  }
`;
