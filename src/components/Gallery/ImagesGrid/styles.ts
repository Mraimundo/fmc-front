import styled from 'styled-components';
import { lighten } from 'polished';

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
  padding: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: 165px;
    object-fit: cover;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.news.dateColor};
  }

  h3 {
    font-size: 16px;
    font-weight: bolder;
    color: ${({ theme }) => theme.news.titleColor};
    margin: 8px 0;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.news.dateColor};
    }

    > a {
      font-size: 12px;
      color: ${({ theme }) => theme.news.dateColor};
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => lighten(0.2, theme.news.dateColor)};
      }
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 500px;
    justify-content: center;
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
