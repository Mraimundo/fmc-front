import styled, { css } from 'styled-components';
import { Button } from 'components/shared';

export const Container = styled.div`
  display: flex;
  padding: 23px 48px;
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
`;

export const AddButton = styled(Button)`
  width: 65px;
  padding: 0;
  border-radius: 50%;
  margin: 0;
  background: transparent;
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
`;
