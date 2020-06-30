import styled, { css } from 'styled-components';

interface ContainerProps {
  opened: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  > span {
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 8px;
  }

  > div {
    position: absolute;
    width: 320px;
    background: #e1e1e1;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    h4 {
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
    }
    visibility: hidden;
    opacity: 0;

    transition: max-height 0.4s, visibility 0.4s, opacity 0.4s;
    ${({ opened }) =>
      opened &&
      css`
        visibility: visible;
        opacity: 1;
      `};
  }
`;
