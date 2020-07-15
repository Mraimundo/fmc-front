import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const MiniBox = styled(Link)`
  padding: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: 175px;
    object-fit: cover;
  }

  h4 {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin: 8px 0;
  }

  a {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
  }

  @media screen and (max-width: 720px) {
    max-width: 500px;
    justify-content: center;
    align-items: center;
    & + div {
      margin-top: 40px;
    }

    > h4 {
      align-self: flex-start;
    }

    > img {
      width: 100%;
    }
  }

  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
