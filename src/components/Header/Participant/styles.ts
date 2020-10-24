import styled from 'styled-components';

import { DropdownList } from './Dropdown.styles';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  position: relative;
  cursor: pointer;
  height: 100%;
  z-index: 1;

  &:hover {
    ${DropdownList} {
      visibility: visible;
    }
  }
`;

export const Hello = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;


export const WelcomeText = styled.div`
  font-size: 0.8em;
  margin-left: 0.5em;
  margin-right: 1em;

  ${Hello} {
    display: block;
  }
`;



