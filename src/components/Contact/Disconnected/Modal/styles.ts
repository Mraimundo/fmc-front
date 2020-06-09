import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 20px 40px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const BoxPhone = styled.div`
  display: flex;
  > div {
    justify-content: flex-end;
    width: 130px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;
