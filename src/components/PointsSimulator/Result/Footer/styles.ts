import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';
import { ReactSVG as DefaultReactSVG } from 'react-svg';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 102px;

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.primary};
  }

  > div {
    display: flex;
    align-items: center;
    > div {
      transform: translateY(2px);
    }

    > button {
      margin-left: 16px;
    }
  }
`;

export const Button = styled(DefaultButton)`
  width: 191px;
  height: 33px;
  border-radius: 5px;
  margin-top: 0;
`;

export const ReactSVG = styled(DefaultReactSVG)`
  &:hover {
    cursor: pointer;
  }
`;
export const ShareContainer = styled.div`
  display: flex;
  position: relative;

  #share-menu-drop {
    position: absolute;
    width: 141px;
    height: 100px;
    top: 30px;
    left: -65px;
    background: #fff;
    border: 1px solid #707070;
    display: flex;
    flex-direction: column;

    button {
      background: transparent;
      border: none;
      text-transform: uppercase;
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 14px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      margin-top: 15px;
    }
  }
`;
