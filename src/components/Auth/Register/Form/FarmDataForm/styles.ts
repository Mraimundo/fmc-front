import styled from 'styled-components';
import { Input as DefaultInput } from 'components/shared';

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const Subtitle = styled.h4`
  color: #e63027;
  margin: 10px 0;
  font-size: 18px;
  max-width: 590px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;
