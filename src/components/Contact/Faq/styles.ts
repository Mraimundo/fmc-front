import styled from 'styled-components';
import { Accordion as DefaultAccordion } from 'components/shared';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #fff;
  color: ${({ theme }) => theme.font.color.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  background-color: #fff;
  padding: 0 20px;
  flex: 1;
`;

export const SubTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 12px;
  font-size: 20px;
  margin-left: 12px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
`;

export const Accordion = styled(DefaultAccordion)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-color: ${({ theme }) => theme.font.color.primary};

  > ._listWrapperContainer {
  }
`;

export const FaqBox = styled.div`
  border: 1px solid ${({ theme }) => theme.regulation.primary.borderColor};
  border-bottom: 0;
  overflow-y: auto;
  margin-left: 110px;
  border: none;
  padding: 10px;
  flex: 1;
`;
