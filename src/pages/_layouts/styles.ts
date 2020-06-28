import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.layout.primary.backgroundColor};
  min-height: 100vh;
`;
