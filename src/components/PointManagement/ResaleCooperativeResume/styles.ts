import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #efefef;
  border-radius: 10px;
  background: #fff;
  color: #193b4e;
  margin-bottom: 0.5em;
  padding-left: 2em;

  > div > h2 {
    font-size: 1.4em;
    font-family: ${FONTS.regular};
    text-transform: uppercase;
  }
`;

export const TotalPointsResume = styled.h2`
  font-size: 1.4em;
  font-family: ${FONTS.bold} !important;
`;

export const ResumeTableWrapper = styled.div`
  background-color: #efefef;
  padding: 1em;
  border-radius: 0 10px 10px 0;
`;

export const ResumeTableTitle = styled.span`
  font-family: ${FONTS.bold};
  color: #193b4e;
  font-size: 0.9em;
`;

export const ResumeTable = styled.ul`
  list-style-type: none;
  width: 310px;
  border-top: 1.5px solid #fff;
  padding-top: 0.5em;

  li {
    font-size: 0.8em;
    font-family: ${FONTS.regular};
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }
`;
