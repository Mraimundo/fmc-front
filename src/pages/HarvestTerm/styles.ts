import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};
  background: #fff;
`;
