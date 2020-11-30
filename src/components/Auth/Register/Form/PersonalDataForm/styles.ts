import styled from 'styled-components';
import {
  Avatar as DefaultAvatar,
  Input as DefaultInput,
  PasswordInput as DefaultPasswordInput,
  Button as DefaultButton,
} from 'components/shared';

import ComoFicouConhecendoSelect from '../Selects/ComoFicouConhecendoSelect';

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
  /*@media screen and (min-width: 1367px) {*/
  font-size: 24px;
  /*}*/
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
`;

export const Avatar = styled(DefaultAvatar)`
  margin-top: 15px;
  margin-bottom: 32px;
  button {
    height: 36px;
    margin-top: 0;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    width: 223px;
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const ComoFicouConhecendoSelectStyled = styled(
  ComoFicouConhecendoSelect,
)`
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const PasswordInput = styled(DefaultPasswordInput)`
  margin-top: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const Button = styled(DefaultButton)`
  margin-top: 15px;
  max-width: 300px;
  align-self: center;
  height: 44px;
  margin-top: 30px;
`;

export const NextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const NextButton = styled(Button)`
  width: 100%;
  max-width: 425px;
  height: 48px;
`;

export const BoxPhone = styled.div`
  display: flex;
  max-width: 499px;
  > div {
    justify-content: flex-end;
    width: 117px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;

export const BoxAutoIndication = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > input {
    cursor: pointer;
  }

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
    margin-left: 8px;
  }
`;
