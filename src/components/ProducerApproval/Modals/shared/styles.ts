import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';

export const Button = styled(DefaultButton)`
  max-width: 200px;
  border-radius: 8px;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1.6em;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
