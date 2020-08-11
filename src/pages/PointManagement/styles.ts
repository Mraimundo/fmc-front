import styled from 'styled-components';
import { Tabs as TabsRT, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 1em;

  @media screen and (max-width: 1199px) {
    font-size: 12px;
  }
`;

export const Tabs = styled(TabsRT)`
  margin: 2em 1em;
`;

export const List = styled(TabList)`
  margin: 0;
  border: none;

  .disabled-tab {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;

    > li {
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  > li {
    padding: 0.8em 2.5em;
    border-radius: 15px 15px 0 0;
    border: 1.5px solid ${({ theme }) => theme.font.color.primary};
    background-color: ${({ theme }) => theme.font.color.primary};
    color: #fff;
    font-family: ${FONTS.medium};
    transition: padding 150ms ease;
    text-transform: uppercase;

    &:hover {
      padding: 0.8em 2.6em;
    }

    &[aria-selected='false'] {
      background-color: #a4b0b7;
      border-color: #a4b0b7;
    }
  }
`;

export const Panel = styled(TabPanel)`
  padding: 1em 2em;
  border: 1.5px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 0 10px 10px 10px;
  background-color: #fff;
  display: none;

  &[class$='selected'] {
    display: block;
  }

  @media screen and (max-width: 768px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const TeamAwardsWrapper = styled.div`
  padding: 2em;
  border: 1.1px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 0 10px 10px 10px;
  height: 100%;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const TeamAwardsResumeWrapper = styled.div`
  padding: 1em;
  border: 1.1px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 10px;
  height: 100%;
`;

const simpleColspanCalc = (span: number) => `${(100 * span) / 12}%`;

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ParticipantsCol = styled.div`
  margin-right: 0.5em;
  width: ${simpleColspanCalc(9)};

  @media screen and (max-width: 1599px) {
    width: ${simpleColspanCalc(8)};
  }

  @media screen and (max-width: 1199px) {
    width: ${simpleColspanCalc(7)};
  }

  @media screen and (max-width: 768px) {
    width: ${simpleColspanCalc(12)};
    margin-right: 0;
    margin-bottom: 0.5em;
  }
`;

export const ResumeCol = styled.div`
  width: ${simpleColspanCalc(3)};

  @media screen and (max-width: 1599px) {
    width: ${simpleColspanCalc(4)};
  }

  @media screen and (max-width: 1199px) {
    width: ${simpleColspanCalc(5)};
  }

  @media screen and (max-width: 768px) {
    width: ${simpleColspanCalc(12)};
  }
`;
