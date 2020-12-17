import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 195px;
  border-radius: 10px;
  background: #d1cfd0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 8px 10px 8px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
    text-transform: uppercase;
  }

  > span {
    font-size: 10px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 3px;
  }

  > ul {
    list-style: none;
    width: 100%;
    margin-top: 12px;

    li {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      height: 25px;
      align-items: center;
      padding: 0 10px;

      &:nth-child(odd) {
        background: #e6e4e5;
      }

      > span {
        width: 100%;
        text-align: left;
        font-size: 10px;
        color: ${({ theme }) => theme.font.color.primary};

        & + span {
          text-align: center;
        }
      }
    }
  }
`;

interface StyledPercentageBarProps {
  percentageCompleted: number;
  percentageSimulated: number;
}

const getBorderRadiusByPercentage = (percentage: number): string => {
  if (percentage < 95) {
    return '9.5px 0 0 9.5px';
  }
  switch (Math.round(percentage)) {
    case 95:
      return '9.5px 0.5px 0.5px 9.5px';
    case 96:
      return '9.5px 2.5px 2.5px 9.5px';
    case 97:
      return '9.5px 3.5px 3.5px 9.5px;';
    case 98:
      return '9.5px 4.5px 4.5px 9.5px';
    case 99:
      return '9.5px 5.5px 5.5px 9.5px';
    default:
      return '9.5px';
  }
};

export const StyledPercentageBar = styled.div<StyledPercentageBarProps>`
  margin-top: 4px;
  width: 100%;
  max-width: 180px;
  height: 19px;
  border-radius: 9.5px;
  background: #fff;
  position: relative;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    position: absolute;
    width: 100%;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    mix-blend-mode: difference;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 19px;
    ${({ percentageCompleted, theme }) => css`
      border-radius: ${getBorderRadiusByPercentage(percentageCompleted)};
      width: ${percentageCompleted < 100 ? percentageCompleted : 100}%;
      background: ${theme.font.color.primary};
    `}
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 19px;
    /*background: #ef716c;*/
    background: #f07a89;
    ${({ percentageSimulated }) => css`
      border-radius: ${getBorderRadiusByPercentage(percentageSimulated)};
      width: ${percentageSimulated < 100 ? percentageSimulated : 100}%;
    `}
  }
`;
