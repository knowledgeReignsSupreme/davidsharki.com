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
            {sections.map((link) => (
              <li key={link.label} onClick={closeDropdown}>
                {link.icon} {link.label}
              </li>
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

  li {
    margin-left: 0.7rem;
    cursor: pointer;
    + li {
      margin-top: 0.7rem;
    }
  }

  svg {
    margin-right: 0.3rem;
  }
`;
