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
    : show && windowWidth <= 600 && (
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
  width: 95%;
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  background: ${darkTheme.body};
  color: ${darkTheme.fontColor};

  li + li {
    margin-top: 0.7rem;
  }

  svg {
    color: white;
  }
`;
