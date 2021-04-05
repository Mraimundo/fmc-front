import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.primary};
  width: 100%;
  max-width: 439px;
  margin-bottom: 2rem;
`;
