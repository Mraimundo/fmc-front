import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > span {
    width: 160px;
    height: 40px;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div {
    padding: 10px;
    border: 1px solid transparent;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.primary};
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
        font-size: 10px;
        color: ${({ theme }) => theme.font.color.secondary};
      }
    }
  }

  @media screen and (max-width: 720px) {
    > div {
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
  }
`;
