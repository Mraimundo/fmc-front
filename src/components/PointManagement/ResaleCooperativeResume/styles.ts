import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #efefef;
  border-radius: 10px;
  background: #fff;
  color: ${({ theme }) => theme.font.color.primary};
  margin-bottom: 0.5em;
  padding-left: 2em;

  > div > h2 {
    font-size: 1.4em;
    font-family: ${FONTS.regular};
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    padding: 1em;
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

  @media screen and (max-width: 768px) {
    border-radius: 10px;
    margin: 0.5em;
  }
`;

export const ResumeTableTitle = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
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

  @media screen and (max-width: 768px) {
    width: auto;

    li span:nth-child(1) {
      margin-right: 1em;
      text-align: left;
    }

    li span:nth-child(2) {
      text-align: right;
    }
  }
`;

export const CongratsText = styled.h2`
  font-size: 1.4em;
  font-family: ${FONTS.bold} !important;
  text-transform: inherit !important;
`;
