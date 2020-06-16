import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: stretch;
  padding: 20px 20px 50px 20px;
`;

export const RegulationContent = styled.div`
  width: 100%;
  flex: 1;
  background: blue;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.modal.primary.scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.modal.primary.scrollBarColor};
  }
`;

export const Button = styled(DefaultButton)`
  width: 250px;
  height: 60px;
  margin-top: 30px;
`;
