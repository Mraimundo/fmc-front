import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 50px 20px;
  height: 100%;
`;
export const Modal = styled(DefaultModal)`
  ._modalContainer {
    max-width: 650px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const Button = styled(DefaultButton)`
  max-width: 200px;
  border-radius: 8px;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1.6em;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 25px;
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
