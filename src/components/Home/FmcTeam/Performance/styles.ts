import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  height: 270px;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    height: auto;
    box-shadow: none;
  }
`;

export const PerformanceWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

interface ProgressWrapperProps {
  borderRight?: boolean;
}
export const ProgressWrapper = styled.div<ProgressWrapperProps>`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);

    &:first-child {
      margin-bottom: 1em;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
  }

  ${({ borderRight }) =>
    borderRight &&
    css`
      position: relative;
      margin-right: 1em;

      &:after {
        content: '';
        height: 50%;
        width: 2px;
        position: absolute;
        right: 0;
        background-color: #eeeeee;
        top: 50%;
        transform: translateY(-25%);

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    `}
`;

export const Label = styled.h3`
  color: #000000;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1em;
  text-align: center;
  margin: 0.5em 0 0.7em 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > span {
    font-size: 12px;
    transform: translateY(1px);
  }
`;

export const IndividualProgressWrapper = styled.div`
  margin: 1em;
  width: 160px;
`;

export const GoalText = styled.p`
  color: #000000;
  font-size: 12px;
  text-align: center;
`;
