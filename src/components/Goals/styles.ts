import styled from 'styled-components';

export const TitleSection = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

export const LastUpdate = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  color: #000;
  margin-top: 2.5em;
  font-size: 0.8em;
`;

export const PercentTextStyledWrapper = styled.div`
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
