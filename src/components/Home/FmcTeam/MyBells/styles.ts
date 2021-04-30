import styled from 'styled-components';
import dot from 'assets/images/dot.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 176px;
  justify-content: center;
  background-color: #fff;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 10px;

  > img {
    height: 100%;
  }

  @media screen and (max-width: 1050px) {
    height: 140px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 25px;

    > img {
      display: none;
    }
  }
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;

  > div {
    flex: 1;
    background: url(${dot}) repeat-x bottom;
    margin: 0 3px;
  }

  @media screen and (max-width: 1050px) {
    margin-top: 5px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.quintenary};
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
    color: #000;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
  }
`;
