import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 276px;
`;

export const Content = styled.div`
  padding: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  width: 100%;
  height: 100%;

  > h3 {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 15px;
    text-align: center;
  }

  > h4 {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 8px;
  }

  > a,
  > span {
    margin-top: 30px;
    width: 158px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.button.primary.backgroundColor};
    color: ${({ theme }) => theme.button.primary.fontColor};
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  > span {
    cursor: not-allowed;
  }
`;

export const Circle = styled.div`
  width: 101px;
  height: 101px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.font.color.quartenary};
    text-align: center;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    position: absolute;
    bottom: 0;
    right: -14px;

    input {
      display: none;
    }

    label {
      > div {
        cursor: pointer;
        svg {
          color: ${({ theme }) => theme.font.color.primary};
          > path {
            fill: ${({ theme }) => theme.font.color.primary};
          }
          > circle {
            fill: ${({ theme }) => theme.font.color.primary};
          }
        }
      }
    }
  }
`;
