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
  margin: 60px 0 40px 0;
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Button = styled(DefaultButton)`
  width: 100%;
  max-width: 425px;
  height: 48px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
