import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.news.titleColor};
    margin: 8px 0;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.news.titleColor};
    margin: 8px 0;
  }
`;
