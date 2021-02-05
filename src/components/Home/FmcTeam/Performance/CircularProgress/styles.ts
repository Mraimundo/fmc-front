import styled from 'styled-components';

export const RealizedText = styled.span`
  font-size: 0.7em;
  display: block;
`;

export const PercentageNumber = styled.span`
  width: 100%;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.6em;
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
`;
