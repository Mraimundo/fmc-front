import styled from 'styled-components';
import Modal from 'components/shared/Modal';

export const CustomModal = styled(Modal)`
  ._modalContainer {
    max-width: 500px;
    max-height: 300px;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 23px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 1.5em;
    margin-left: 23px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;

export const ReasonWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  height: 200px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.font.color.quartenary};
  font-size: 0.9em;
  color: ${({ theme }) => theme.font.color.primary};
  position: relative;
`;
