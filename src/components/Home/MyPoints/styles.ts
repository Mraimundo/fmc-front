import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Period = styled.div`
  span {
    display: block;
    text-align: center;
  }
`;

export const PeriodText = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;

export const TotalPointsText = styled.h4`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 0.9em;
`;

export const PointsWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Points = styled.h3`
  font-size: 2em;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;
