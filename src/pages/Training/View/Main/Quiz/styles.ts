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
        background: ${status ? 'green' : 'red'};
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

  > button {
    width: 160px;
    height: 40px;
    font-size: 14px;
    align-self: center;
    margin-top: 20px;
  }
`;
