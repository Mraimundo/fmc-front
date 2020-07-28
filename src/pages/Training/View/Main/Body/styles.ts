import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.quartenary};
    margin-top: 30px;
  }

  > h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: justify;
  }

  > div {
    display: flex;

    > div {
      width: 50%;
      min-height: 280px;
      img {
        object-fit: cover;
        max-width: 100%;
      }
    }

    > p {
      color: ${({ theme }) => theme.font.color.secondary};
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
      text-align: justify;
      margin-left: 15px;
      width: 50%;
      font-size: 14px;
    }
  }
`;

export const Player = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
`;
