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
`;

export const InputContainer = styled.div<InputContainerProps>`

  background: ${({ theme }) => theme.input.backgroundColor};
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.input.borderColor};
  color: ${({ theme }) => theme.input.iconColor};

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.input.errorBorderColor};
    `}

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.input.focusedBorderColor};
      color: ${theme.input.filledIconColor};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      color: ${theme.input.filledIconColor};
    `}

  & + div {
    margin-top: 8px;
  }

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
  padding-left: 5px;

  svg {
    color: ${({ theme }) => theme.input.errorIconColor};
    margin: 0;
  }
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

export const EyeContainer = styled(IconContainer)`
  margin-left: 14px;
  margin-right: 0px;
  svg {
    color: ${({ theme }) => theme.input.iconColor};
    cursor: pointer;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  align-self: flex-start;
  margin-left: 4px;
  color: ${({ theme }) => theme.input.labelFontColor};
`;
