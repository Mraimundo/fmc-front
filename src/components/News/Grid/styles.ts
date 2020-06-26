import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 45px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MiniBox = styled.div`
  img {
    max-width: 100%;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.news.dateColor};
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.news.titleColor};
    margin: 8px 0;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.news.summaryColor};
  }

  @media screen and (max-width: 720px) {
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & + div {
      margin-top: 40px;
    }

    > span {
      align-self: flex-start;
    }

    > img {
      width: 100%;
    }
  }
`;
