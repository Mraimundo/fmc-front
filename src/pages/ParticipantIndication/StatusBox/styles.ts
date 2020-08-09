import styled, { css } from 'styled-components';
import plusButton from 'assets/images/indication/plus.svg';
import minusButton from 'assets/images/indication/minus2.svg';

export const Container = styled.div`
  display: flex;
  padding: 18px 48px;
  background-color: #e9ece6;
  width: 100%;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;

  > h3 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    text-transform: uppercase;
    margin-right: 10px;
    width: 243px;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 10px;
    > h3 {
      width: 100%;
      text-align: center;
      margin-right: 0;
    }
  }
`;

interface AddButtonProps {
  opened: boolean;
}
export const AddButton = styled.button<AddButtonProps>`
  width: 65px;
  height: 65px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: none;
  background: transparent;
  transition: background 0.2s ease, transform 0.3s;
  background: url(${({ opened }) => (opened ? minusButton : plusButton)}) center
    center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.font.color.primary};
  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
  @media screen and (max-width: 720px) {
    align-self: flex-end;
    margin-top: 10px;
    width: 50px;
    height: 50px;
    background-size: 50%;
  }
`;

interface StatusIndicatorProps {
  percentActivated: number;
}
export const StatusIndicator = styled.div<StatusIndicatorProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  > span {
    margin-left: 6px;
    position: relative;
    ._filled {
      rect {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }
  }

  ._last {
    &::after {
      content: "${({ percentActivated }) => percentActivated}%";
      position: absolute;
      color: ${({ theme }) => theme.font.color.primary};
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    min-height: 10px;
    margin-top:7px;
    > span {
      margin-left: 0;
      & + span {
        margin-left: 6px;
      }
    }
    ._last {
      &::after {
        top: 34px;
      }
    }
  }
`;
