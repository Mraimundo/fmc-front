import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 270px;
  position: relative;
`;

interface PieProps {
  rotate: number;
  size: number;
  index: number;
  length: number;
  value: string;
  winner?: boolean;
}

export const PieSlice = styled.div<PieProps>`
  position: absolute;
  width: 270px;
  height: 270px;
  border-radius: 100%;
  clip: rect(0px, 270px, 270px, 135px);
  transform: rotate(${({ rotate }) => `${rotate}deg`});

  > div {
    transition: all 1s;
    position: absolute;
    width: 270px;
    height: 270px;
    border-radius: 100%;
    clip: rect(0px, 135px, 270px, 0px);
    background: ${({ index }) =>
      index % 2 === 0
        ? 'linear-gradient(to right, rgb(108, 108, 110) 0%, rgb(173, 174, 176) 100%)'
        : 'linear-gradient(to right, rgb(163, 1, 16) 0%, rgb(232, 1, 19) 100%)'};
    transform: rotate(${({ size }) => `${size}deg`});

    transition: background 300ms;
    &::after {
      /*transition: background 1s 5s;*/
      transition: background 300ms;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ winner }) =>
        winner === false ? 'rgba(0,0,0,0.5)' : 'transparent'};
      transform: rotate(45deg);
    }

    &::before {
      content: '${({ value }) => `${value}`}';
      position: absolute;
      font-size: 14px;
      transform: rotate(${({ size }) => `-${size / 2}deg`});
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      color: ${({ index }) =>
        index % 2 === 0 ? 'rgb(163, 1, 16)' : 'rgb(173, 174, 176)'};
      line-height: 1;

      left: -22px;
      top: 72px;

      /*teste*/
      width: calc(270px / ${({ length }) => length});
      height: calc(270px / ${({ length }) => length});
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      /*FImTEste*/

      ${({ length }) =>
        length > 2 &&
        css`
          left: 40px;
          top: 40px;
        `}

      ${({ length }) =>
        length > 4 &&
        css`
          left: 66px;
          top: 30px;
        `}

      ${({ length }) =>
        length > 6 &&
        css`
          left: 82px;
          top: 32px;
        `}

        ${({ length }) =>
          length > 8 &&
          css`
            left: 91px;
            top: 29px;
          `}
    }
  }
`;
