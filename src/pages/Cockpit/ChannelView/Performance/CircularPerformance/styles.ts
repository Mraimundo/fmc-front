import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const CircularSectionItem = styled.div`
  width: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;

export const PercentCircularCenter = styled.div`
  position: absolute;
  background-color: #eef1f2;
  width: 69%;
  height: 69%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 100%;
  box-shadow: 2px 3px 6px rgb(0 0 0 / 51%);
  border: 1.2px solid #fff;
  color: #000;

  > div {
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
    font-size: 0.8em;
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
  }
`;
