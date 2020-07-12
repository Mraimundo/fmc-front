import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.7;
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
      text-align: justify;
      margin-left: 15px;
      width: 50%;
    }
  }
`;

export const Player = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
`;
