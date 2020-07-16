import styled from 'styled-components';
import { shade, lighten } from 'polished';

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
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 6px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin: 4px 0 2px 0;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.secondary};
    }
  }

  > a {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.tertiary};
    background: ${({ theme }) => theme.font.color.primary};
    transition: color 0.2s;
    width: auto;
    padding: 6px 25px;
    text-decoration: none;
    border-radius: 8px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-top: 10px;

    background-position: center;
    transition: background 0.5s;
    &:hover {
      background: ${({ theme }) => shade(0.2, theme.font.color.primary)}
        radial-gradient(
          circle,
          transparent 1%,
          ${({ theme }) => shade(0.2, theme.font.color.primary)} 1%
        )
        center/15000%;
    }

    &:active {
      background-color: ${({ theme }) =>
        lighten(0.1, theme.font.color.primary)};
      background-size: 100%;
      transition: background 0s;
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
