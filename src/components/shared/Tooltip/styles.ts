import styled from 'styled-components';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

export const ContentTooltip = styled.span<ContainerProps>`
  background-color: ${({ theme, type }) => theme.tooltip[type].backgroundColor};
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, type }) => theme.tooltip[type].fontColor};
`;

export const Container = styled.div``;
