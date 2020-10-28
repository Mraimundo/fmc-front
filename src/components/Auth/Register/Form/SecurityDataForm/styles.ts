import styled from 'styled-components';
import {
  PasswordInput as DefaultPasswordInput,
  Button as DefaultButton,
} from 'components/shared';

export const PasswordInput = styled(DefaultPasswordInput)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.quartenary};
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Button = styled(DefaultButton)`
  margin-top: 15px;
  max-width: 300px;
  align-self: center;
  height: 44px;
  margin-top: 30px;
`;
