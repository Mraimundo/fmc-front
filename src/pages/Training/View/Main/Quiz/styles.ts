import styled, { css } from 'styled-components';
import DefaultFormControlLabel from '@material-ui/core/FormControlLabel';
import DefaultRadioGroup from '@material-ui/core/RadioGroup';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 232px;
    height: 48px;
    font-size: 16px;
    align-self: center;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 5px;
  }

  > h4 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 20px 35px;
  }

  @media screen and (max-width: 720px) {
    > button {
      width: 100%;
      margin-bottom: 25px;
    }
  }
`;

export const Content = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;

  > p {
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    font-size: 14px;
    text-align: justify;
    margin-top: 25px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px;
  }
`;

export const BoxNumbers = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 720px) {
    flex-wrap: wrap;
  }
`;

interface QuestionNumberProps {
  selected: boolean;
  status?: boolean;
}

export const QuestionNumber = styled.div<QuestionNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 50%;
  background: transparent;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.primary};
  cursor: pointer;
  position: relative;

  & + div {
    margin-left: 20px;
  }

  ${({ theme, selected }) =>
    selected &&
    css`
      background: ${theme.font.color.primary};
      color: ${theme.font.color.tertiary};
    `};

  strong {
    position: absolute;
    cursor: auto;
  }

  ${({ status }) =>
    typeof status === 'boolean' &&
    css`
      strong {
        top: calc(100% - 17px);
        left: calc(100% - 6px);
    `};

  @media screen and (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`;

export const Asnwers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  > h5 {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 21px;
    margin-bottom: 10px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  .Mui-checked {
    color: green;
  }

  .MuiFormControlLabel-label {
    color: #707070;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    text-align: justify;

    @media screen and (max-width: 720px) {
      font-size: 16px;
    }
  }

  ._rightAnswer {
    .MuiFormControlLabel-label {
      position: relative;

      &::before {
        content: '';
        width: calc(100% + 20px);
        height: 100%;
        position: absolute;
        background: green;
        top: 0;
        left: -8px;
        border-radius: 24px;
        opacity: 0.4;
      }

      &::after {
        content: '';
        font-size: 22px;
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
        position: absolute;
        color: #fff;
        transform: scaleX(-1) rotate(-35deg);
        top: -7px;
        right: -21px;
      }
    }
  }

  ._wrongAnswer {
    .MuiFormControlLabel-label {
      position: relative;

      &::before {
        content: '';
        width: calc(100% + 20px);
        height: 100%;
        position: absolute;
        background: red;
        top: 0;
        left: -8px;
        border-radius: 24px;
        opacity: 0.4;
      }

      &::after {
        content: '';
        font-size: 22px;
        font-family: Helvetica-Neue-Bold;
        position: absolute;
        color: #fff;
        -webkit-transform: scaleX(-1) rotate(-35deg);
        -ms-transform: scaleX(-1) rotate(-35deg);
        transform: scaleX(-1) rotate(0deg);
        top: -4px;
        right: -21px;
      }
    }
  }
`;

export const FormControlLabel = styled(DefaultFormControlLabel)`
  color: ${({ theme }) => theme.font.color.quartenary};
`;

export const RadioGroup = styled(DefaultRadioGroup)`
  .MuiRadio-colorPrimary.Mui-checked {
    color: ${({ theme }) => theme.font.color.primary};
  }
  .MuiRadio-root {
    padding: 4px;
    margin-right: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    width: 232px;
    height: 48px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    text-transform: uppercase;
    border-radius: 5px;
    align-self: center;
    margin-top: 20px;
  }

  @media screen and (max-width: 720px) {
    > div {
      width: 48%;
      button {
        width: 100%;
      }
    }
  }
`;
