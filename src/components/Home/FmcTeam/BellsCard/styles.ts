import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 270px;
  align-items: center;

  background: #fff;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 10px;

  padding: 0 25px;
`;

export const Subtitle = styled.span`
  position: absolute;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  text-transform: uppercase;
  font-size: 8px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

interface RowProps {
  reached: boolean;
}
export const Row = styled.div<RowProps>`
  display: flex;
  margin-top: 12px;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    width: 32px;
    height: 38px;

    ${({ reached, theme }) =>
      reached &&
      css`
        path {
          fill: ${theme.font.color.primary};
        }
      `}
  }

  > span {
    flex: 1;
    text-transform: uppercase;
    font-size: 14px;
    color: #000;
    margin-left: 12px;
  }

  > strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    color: #000;
    transform: translateY(-4px);
    margin-left: 12px;
    white-space: nowrap;
  }
`;
