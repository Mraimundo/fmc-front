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
    cursor: pointer;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
  }

  h3 {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 8px 0;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.secondary};
    }

    > a {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.secondary};
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => lighten(0.2, theme.font.color.secondary)};
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
