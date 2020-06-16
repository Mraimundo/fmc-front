import styled from 'styled-components';
import {
  Avatar as DefaultAvatar,
  Input as DefaultInput,
  PasswordInput as DefaultPasswordInput,
  Button as DefaultButton,
} from 'components/shared';
import { animated } from 'react-spring';
import GraduationLevelSelect from './Form/GraduationLevelSelect';
import MaritalSelect from './Form/MaritalStatusSelect';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(4, 36, 44, 1) 0%,
    rgba(56, 77, 85, 1) 100%
  );

  > img {
    width: 260px;
    margin: 15px 0;
  }
`;

export const Content = styled(animated.div)`
  width: 720px;
  background: #fff;
  padding: 20px 30px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

export const Avatar = styled(DefaultAvatar)`
  margin-top: 15px;
  margin-bottom: 5px;
  button {
    height: 35px;
    margin-top: 0;
    font-size: 14px;
    font-weight: bold;
    /*@media screen and (min-width: 1367px) {*/
    height: 40px;
    font-size: 16px;
    /*}*/
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  strong {
    font-weight: bolder;
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
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  max-width: 350px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const PasswordInput = styled(DefaultPasswordInput)`
  margin-top: 15px;
  max-width: 350px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const GraduationSelect = styled(GraduationLevelSelect)`
  margin-top: 15px;
  max-width: 350px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const MaritalStatusSelect = styled(MaritalSelect)`
  margin-top: 15px;
  max-width: 350px;

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

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
`;

export const BoxPhone = styled.div`
  display: flex;
  max-width: 350px;
  > div {
    justify-content: flex-end;
    width: 140px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;
