import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: flex-start;
  background: #f6f6f6;
  & + div {
    margin-top: 15px;
  }

  > img {
    width: 160px;
    object-fit: cover;
  }

  > a {
    align-self: center;
    margin-right: 20px;
    svg {
      color: ${({ theme }) => theme.font.color.primary};
      > path {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }
  }

  > div {
    padding-left: 20px;
    flex: 1;
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.secondary};
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
      transform: translateY(-2px);
      display: block;
      margin-top: 8px;
    }

    h3 {
      font-size: 16px;
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
      color: ${({ theme }) => theme.font.color.primary};
    }

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.primary};
      margin-top: 10px;
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
