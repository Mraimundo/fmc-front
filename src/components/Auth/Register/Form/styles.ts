import styled from 'styled-components';

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  margin-bottom: 10px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;
