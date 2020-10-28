import styled from 'styled-components';
import { Input as DefaultInput } from 'components/shared';
import DefaultGraduationLevelSelect from '../Selects/GraduationLevelSelect';
import DefaultMaritalSelect from '../Selects/MaritalStatusSelect';
import DefaultGenderSelect from '../Selects/GenderSelect';
import DefaultPublicPlaceSelect from '../Selects/PublicPlaceSelect';
import DefaultUfSelect from '../Selects/UfsSelect';

export const UfSelect = styled(DefaultUfSelect)`
  margin-top: 15px;
  max-width: 100px;

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

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
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

export const UfSelectRG = styled(UfSelect)`
  max-width: 180px;
`;

export const BoxAutoIndication = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > input {
    cursor: pointer;
  }

  > span {
    font-family: #e63027;
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-left: 8px;
  }
`;
