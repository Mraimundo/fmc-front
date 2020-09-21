import styled from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header/constants';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.menu.background};
  height: ${HEADER_HEIGHT};
  width: 100%;
  padding: 0 1em;
  font-size: 14px;

  @media screen and (max-width: 1220px) {
    font-size: 12px;
  }
`;

export const ParticipantWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
