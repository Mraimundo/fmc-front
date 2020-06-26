import styled from 'styled-components';
import DefaultLogo from 'components/shared/Logo';

export const Container = styled.div`
  background: ${({ theme }) => theme.layout.primary.backgroundColor};
  min-height: 100vh;
`;

export const Logo = styled(DefaultLogo)``;
