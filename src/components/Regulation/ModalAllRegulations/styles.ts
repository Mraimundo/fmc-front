import styled from 'styled-components';
import { Accordion as DefaultAccordion } from 'components/shared';
import DefaultModal from 'components/shared/Modal';

interface ContainerProps {
  type: 'primary' | 'secondary';
}

export const Modal = styled(DefaultModal)`
  padding: 0;
  ._modalContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    max-height: 100vh;
  }
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(90deg, rgb(4, 36, 44) 0%, rgb(56, 77, 85) 100%);
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    width: 260px;
    margin: 15px 0;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarColor};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  padding: 20px;
  flex: 1;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 12px;
`;

export const Accordion = styled(DefaultAccordion)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const ContentRegulation = styled.div`
  border: 1px solid ${({ theme }) => theme.regulation.primary.borderColor};
  overflow-y: auto;
  margin-left: 78px;
  transform: translateY(-5px) translateX(1px);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  > button {
    width: 130px;
    height: 34px;
    & + button {
      margin-left: 25px;
    }
  }
`;
