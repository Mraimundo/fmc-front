import styled from 'styled-components';

import {
  HEADER_HEIGHT,
  HEADER_BACKGROUND_COLOR_DROPDOWN,
} from 'components/Header/constants';

export const DropdownList = styled.div`
  visibility: hidden;
  position: absolute;
  width: 100%;
  top: ${HEADER_HEIGHT};
  background-color: ${HEADER_BACKGROUND_COLOR_DROPDOWN};
  padding: 0 1em;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const Establishment = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  display: block;
  margin-bottom: 0.4em;
`;

export const ProfileInfo = styled.div`
  margin-top: 1em;
  font-size: 0.9em;
`;

export const ParticipantMenuList = styled.ul`
  list-style-type: none;
  font-size: 0.9em;
  border-top: 1px solid;
  padding-top: 0.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;

  li {
    height: 25px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.font.color.primary};
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform 150ms ease;

      &:hover {
        transform: translateX(3px);
      }
    }
  }
`;
