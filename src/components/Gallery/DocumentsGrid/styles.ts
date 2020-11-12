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

  > a,
  .link {
    align-self: center;
    margin-right: 20px;
    svg {
      color: ${({ theme }) => theme.font.color.primary};
      > path {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }
  }

  .link {
    cursor: not-allowed;
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
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      color: ${({ theme }) => theme.font.color.primary};
    }

    p {
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.primary};
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    max-width: 500px;
    justify-content: center;
    align-items: flex-start;
    & + div {
      margin-top: 40px;
    }

    > div {
      padding: 0;
      margin-top: 10px;

      > h3 {
        text-align: justify;
      }

      > p {
        text-align: justify;
      }
    }

    > span {
      align-self: flex-start;
    }

    > img {
      width: 100%;
    }

    > a,
    link {
      align-self: flex-end;
      margin-top: 10px;
      margin-right: 0;
    }
  }
`;
