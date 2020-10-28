import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

export const Obs = styled.p`
  font-size: 18px;
  color: #e63027;
  max-width: 590px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;

export const Button = styled(DefaultButton)`
  margin-top: 15px;
  max-width: 300px;
  align-self: center;
  height: 44px;
  margin-top: 30px;
`;
