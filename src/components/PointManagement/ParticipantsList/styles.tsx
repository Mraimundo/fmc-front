import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const TitleSeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.2em;
  border-bottom: 1.2px solid #193b4e;
  margin-top: 1.5em;
  height: 30px;
`;

export const RoleTitle = styled.h1`
  font-family: ${FONTS.bold};
  font-size: 1.1em;
  color: #193b4e;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    @media screen and (max-width: 1442px) {
      width: calc((100% / 2) - 15px);
    }

    @media screen and (max-width: 992px) {
      width: 100%;
      margin-right: 0 !important;
    }
  }
`;

export const ParticipantsEmpty = styled.h3`
  color: #193b4e;
  font-family: ${FONTS.medium};
  margin-top: 1em;
  font-size: 1em;
`;
