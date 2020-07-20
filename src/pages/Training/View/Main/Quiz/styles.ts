import styled, { css } from 'styled-components';
import DefaultFormControlLabel from '@material-ui/core/FormControlLabel';
import DefaultRadioGroup from '@material-ui/core/RadioGroup';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 160px;
    height: 40px;
    font-size: 14px;
    align-self: center;
    margin-top: 20px;
  }

  > h4 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin: 20px 35px;
  }
`;

export const Content = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;

  > p {
    color: ${({ theme }) => theme.font.color.secondary};
    text-align: justify;
    margin-top: 25px;
  }
`;

export const BoxNumbers = styled.div`
  display: flex;
  justify-content: center;
`;

interface QuestionNumberProps {
  selected: boolean;
  status?: boolean;
}

export const QuestionNumber = styled.div<QuestionNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 50%;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
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
        width: 12px;
        height: 12px;
        border: 1px solid #000;
        top: calc(100% - 6px);
        left: calc(100% - 6px);
        ${status
          ? css`
              &::after {
                content: 'L';
                position: absolute;
                color: green;
                font-size: 15px;
                font-weight: bold;
                transform: scaleX(-1) rotate(-35deg);
                top: -6px;
                left: 2px;
              }
            `
          : css`
              &::after {
                content: 'X';
                position: absolute;
                color: red;
                font-size: 13px;
                font-weight: bold;
                top: -3px;
                left: 1px;
              }
            `}
      }
    `};
`;

export const Asnwers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  > h5 {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 20px;
    margin-bottom: 10px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  .Mui-checked {
    color: green;
  }

  ._rightAnswer {
    .MuiFormControlLabel-label {
      position: relative;

      &::before {
        content: '';
        width: 22px;
        height: 22px;
        position: absolute;
        background: green;
        top: 0px;
        right: -25px;
        border-radius: 50%;
      }

      &::after {
        content: 'L';
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        color: #fff;
        transform: scaleX(-1) rotate(-35deg);
        top: -7px;
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
    width: 160px;
    height: 40px;
    font-size: 14px;
    align-self: center;
    margin-top: 20px;
  }
`;
