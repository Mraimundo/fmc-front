import styled, { css } from 'styled-components';
import { Button } from 'components/shared';
import plusButton from 'assets/images/indication/plus-button.svg';
import minusButton from 'assets/images/indication/minus-button.svg';

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
    font-weight: bold;
    color: #193b4e;
    text-transform: uppercase;
    margin-right: 10px;
    width: 225px;
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
  transition: background 0.5s ease, transform 0.3s;
  background-image: url(${({ opened }) => (opened ? minusButton : plusButton)});
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
    background-size: 50px;
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
  }

  ._last {
    &::after {
      content: "${({ percentActivated }) => percentActivated}%";
      position: absolute;
      color: #193b4e;
      font-weight: 900;
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
