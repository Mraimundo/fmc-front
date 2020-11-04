import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

export const Obs = styled.p`
  font-size: 18px;
  color: #e63027;
  max-width: 590px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  margin: 40px 0;
`;

export const Button = styled(DefaultButton)`
  margin-top: 30px;
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
