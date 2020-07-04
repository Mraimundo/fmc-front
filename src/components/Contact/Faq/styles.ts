import styled from 'styled-components';
import { Accordion as DefaultAccordion } from 'components/shared';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #fff;
  color: #000;
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
`;

export const Accordion = styled(DefaultAccordion)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  > ._listWrapperContainer {
  }
`;

export const FaqBox = styled.div`
  border: 1px solid ${({ theme }) => theme.regulation.primary.borderColor};
  border-bottom: 0;
  overflow-y: auto;
  margin-left: 78px;
  transform: translateX(1px);
  padding: 10px;
  flex: 1;
`;
