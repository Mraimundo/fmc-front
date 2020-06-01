import styled, { css } from 'styled-components';
import Tooltip from 'components/shared/Tooltip';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: ${({ theme }) => theme.input.backgroundColor};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: 0 16px;
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  border: ${({ theme }) => theme.input.borderWidth} solid
    ${({ theme }) => theme.input.borderColor};
  color: ${({ theme }) => theme.input.iconColor};
  margin-bottom: 8px;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.input.errorBorderColor};
      border-width: ${theme.input.errorBorderWidth};
    `};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.input.focusedBorderColor};
      color: ${theme.input.filledIconColor};
      border-width: ${theme.input.focusedBorderWidth};
    `};

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border-color: ${theme.input.filledBorderColor};
      color: ${theme.input.filledIconColor};
      border-width: ${theme.input.filledBorderWidth};
    `};

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.input.fontColor};

    &::placeholder {
      color: ${({ theme }) => theme.input.placeholderColor};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    color: ${({ theme }) => theme.input.errorIconColor};
  }
`;

export const Label = styled.span`
  font-size: 14px;
  align-self: flex-start;
  margin-left: 4px;
  color: ${({ theme }) => theme.input.labelFontColor};
`;
