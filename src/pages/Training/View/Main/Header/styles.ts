import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > span {
    width: 232px;
    height: 48px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  > div {
    padding: 10px;
    border: 1px solid transparent;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.secondary};
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    }

    h3 {
      font-size: 21px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      color: ${({ theme }) => theme.font.color.primary};
      margin: 1px 0 2px 0;
    }

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 6px;

      > span {
        font-size: 12px;
        color: ${({ theme }) => theme.font.color.secondary};
        font-family: ${({ theme }) => theme.font.fontFamily.condensed};
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
