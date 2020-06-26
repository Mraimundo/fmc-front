import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.news.titleColor};
    margin-top: 25px;
  }

  > h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.news.titleColor};
    margin-top: 35px;
    margin-left: 25px;
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.news.dateColor};
  }

  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.news.summaryColor};
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.news.summaryColor};
`;
