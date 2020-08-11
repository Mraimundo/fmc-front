import styled from 'styled-components';
import {
  Avatar as DefaultAvatar,
  Input as DefaultInput,
  PasswordInput as DefaultPasswordInput,
  Button as DefaultButton,
} from 'components/shared';
import DefaultGraduationLevelSelect from './GraduationLevelSelect';
import DefaultMaritalSelect from './MaritalStatusSelect';
import DefaultGenderSelect from './GenderSelect';
import DefaultPublicPlaceSelect from './PublicPlaceSelect';
import DefaultUfSelect from './UfsSelect';

export const UfSelect = styled(DefaultUfSelect)`
  margin-top: 15px;
  max-width: 100px;

  ._inputContainer {
    height: 40px;
  }
`;

export const UfSelectRG = styled(UfSelect)`
  max-width: 180px;
`;

export const Avatar = styled(DefaultAvatar)`
  margin-top: 15px;
  margin-bottom: 5px;
  button {
    height: 36px;
    margin-top: 0;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    width: 223px;
  }
`;

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

export const Info = styled.div`
  margin-top: 15px;

  span {
    color: ${({ theme }) => theme.font.color.secondary};
    font-size: 14px;
  }

  p {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-top: 2px;
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 15px;
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

export const GraduationSelect = styled(DefaultGraduationLevelSelect)`
  margin-top: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const MaritalStatusSelect = styled(DefaultMaritalSelect)`
  margin-top: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const GenderSelect = styled(DefaultGenderSelect)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const PublicPlaceSelect = styled(DefaultPublicPlaceSelect)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const Button = styled(DefaultButton)`
  margin-top: 15px;
  max-width: 300px;
  align-self: center;
  height: 44px;
  margin-top: 30px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
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
