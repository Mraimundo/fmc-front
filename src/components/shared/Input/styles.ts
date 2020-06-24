import styled, { css } from 'styled-components';
import Tooltip from 'components/shared/Tooltip';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
  inputRole: 'primary' | 'secondary';
}

interface ErrorProps {
  inputRole: 'primary' | 'secondary';
}

interface LabelProps {
  inputRole: 'primary' | 'secondary';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: ${({ theme, inputRole }) =>
    theme.input[inputRole].backgroundColor};
  border-radius: ${({ theme, inputRole }) =>
    theme.input[inputRole].borderRadius};
  padding: 0 16px;
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  border: ${({ theme, inputRole }) => theme.input[inputRole].borderWidth} solid
    ${({ theme, inputRole }) => theme.input[inputRole].borderColor};
  color: ${({ theme, inputRole }) => theme.input[inputRole].iconColor};

  ${({ hasError, theme, inputRole }) =>
    hasError &&
    css`
      border-color: ${theme.input[inputRole].errorBorderColor};
      border-width: ${theme.input[inputRole].errorBorderWidth};
    `};

  ${({ isFocused, theme, inputRole }) =>
    isFocused &&
    css`
      border-color: ${theme.input[inputRole].focusedBorderColor};
      color: ${theme.input[inputRole].filledIconColor};
      border-width: ${theme.input[inputRole].focusedBorderWidth};
    `};

  ${({ isFilled, theme, inputRole }) =>
    isFilled &&
    css`
      border-color: ${theme.input[inputRole].filledBorderColor};
      color: ${theme.input[inputRole].filledIconColor};
      border-width: ${theme.input[inputRole].filledBorderWidth};
    `};

  input {
    width: 100%;
    min-width: 0;
    background-color: transparent;
    border: 0;
    color: ${({ theme, inputRole }) => theme.input[inputRole].fontColor};

    &::placeholder {
      color: ${({ theme, inputRole }) =>
        theme.input[inputRole].placeholderColor};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)<ErrorProps>`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    color: ${({ theme, inputRole }) => theme.input[inputRole].errorIconColor};
  }
`;

export const Label = styled.span<LabelProps>`
  font-size: 14px;
  align-self: flex-start;
  margin-left: 4px;
  color: ${({ theme, inputRole }) => theme.input[inputRole].labelFontColor};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  svg {
    margin: 0;
  }
`;
