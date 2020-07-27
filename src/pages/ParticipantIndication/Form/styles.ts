import styled from 'styled-components';
import {
  Input as DefaultInput,
  Button as DefaultButton,
} from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 10px;
  }

  > h4 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 25px;
  }

  > span {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    opacity: 0.7;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    > div {
      margin-top: 10px;
    }
    ._inputContainer {
      height: 44px;
    }
  }
`;

export const BoxPhone = styled.div`
  display: flex;
  > div {
    justify-content: flex-end;
    width: 140px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: 720px) {
    > div {
      width: 95px;
      & + width {
        width: 100%;
      }
    }
    /*flex-direction: column;
    > div + div {
      margin-top: 8px;
    }*/
  }
`;

export const Input = styled(DefaultInput)``;

export const Button = styled(DefaultButton)`
  height: 44px;
  width: 200px;
  align-self: flex-end;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 20px 0 10px 0;
  }
`;

export const PanelIndication = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 5px;
  transform: translateY(-5px);

  > button {
    width: 100%;
    height: 55px;
    border: none;
    border-bottom: 4px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    background: transparent;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }

  > ._selected {
    border-bottom: 4px solid rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.8);
  }
`;
