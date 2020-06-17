import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 60px 100px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;
