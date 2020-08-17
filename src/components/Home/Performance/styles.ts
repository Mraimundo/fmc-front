import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  height: 300px;

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

  @media screen and (max-width: 768px) {
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);

    &:first-child {
      margin-bottom: 1em;
    }
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
        background-color: #EEEEEE;
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
  margin: 0.5em 0 1em 0;
`;

export const IndividualProgressWrapper = styled.div`
  margin: 1em;
  width: 160px;
`;

export const CompletePerformanceWrapper = styled.div`
  margin-top: 1em;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.9em;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};

    svg {
      margin-left: 0.5em;
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;
