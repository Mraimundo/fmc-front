import styled from 'styled-components';
import { Tabs as TabsRT, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 1em;

  @media screen and (max-width: 992px) {
    font-size: 12px;
  }
`;

export const Tabs = styled(TabsRT)`
  margin: 2em 1em;
`;

export const List = styled(TabList)`
  margin: 0;
  border: none;

  > li {
    padding: 0.8em 2.5em;
    border-radius: 15px 15px 0 0;
    border: 1.5px solid #193b4e;
    background-color: #193b4e;
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
  border: 1.5px solid #193b4e;
  border-radius: 0 10px 10px 10px;
  background-color: #fff;
  display: none;

  &[class$="selected"] {
    display: block;
  }
`;

export const TeamAwardsWrapper = styled.div`
  padding: 2em;
  border: 1.1px solid #193f4e;
  border-radius: 0 10px 10px 10px;
`;

export const TeamAwardsResumeWrapper = styled.div`
  padding: 1em;
  border: 1.1px solid #193f4e;
  border-radius: 10px;
  height: 100%;
`;
