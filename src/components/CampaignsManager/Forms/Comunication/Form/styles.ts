import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 8px;
  }

  > button {
    width: 232px;
    height: 48px;
    text-transform: uppercase;
    align-self: center;
    margin-top: 60px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  > img {
    max-width: 170px;
    width: 100%;
    object-fit: cover;
  }

  > span {
    color: ${({ theme }) => theme.font.color.quartenary};
    font-size: 16px;
    margin-top: 14px;

    .MuiIconButton-root {
      padding: 0;
      height: 21px;
    }
  }

  & + div {
    margin-left: 120px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    margin-top: 40px;
    & + div {
      margin-top: 80px;
    }
    > div {
      width: 100%;
      max-width: 350px;
      & + div {
        max-width: fit-content;
      }
    }
  }
`;
