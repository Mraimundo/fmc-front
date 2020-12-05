import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
    color: ${({ theme }) => theme.font.color.primary};
    padding-top: 23px;
  }

  > div {
    margin-top: 24px;
    display: flex;
    align-items: center;

    > h3 {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 24px;
      color: ${({ theme }) => theme.font.color.primary};
    }

    > span {
      margin-left: 14px;
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.primary};
    }

    > div {
      margin-left: 52px;
      transform: translateY(-8px);
    }
  }
`;
