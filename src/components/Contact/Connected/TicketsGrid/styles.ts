import styled, { css } from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface TicketGridProps {
  opened: boolean;
}

export const TicketGrid = styled.div<TicketGridProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  border: 1px solid transparent;

  transition: border 1s ease;
  ${({ opened }) =>
    opened &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
    `};

  & + div {
    margin-top: 10px;
  }

  header {
    background: #efefef;
    width: 100%;
    display: grid;
    grid-template-columns: 150px auto 155px 80px;
    padding: 25px 20px;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: ${({ theme }) => theme.font.color.quartenary};
    }

    h4 {
      display: flex;
      align-items: center;

      font-size: 14px;
      color: ${({ theme }) => theme.font.color.quartenary};
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        color: ${({ theme }) => theme.font.color.primary};
      }
    }
  }

  ._contentMessage {
    max-height: 0;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;

    transition: max-height 0.5s ease;
    ${({ opened }) =>
      opened &&
      css`
        max-height: 400px;
        overflow-y: auto;
      `};
  }

  @media screen and (max-width: 720px) {
    header {
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;

      h4 {
        margin-top: 10px;
      }

      > div {
        margin-top: 10px;
        & + div {
          display: none;
        }
      }
    }
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 170px auto 160px 80px;
  width: 100%;
  padding-right: 20px;

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quintenary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    &:nth-child(3) {
      justify-self: center;
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

interface IconProps {
  defaultcolor?: boolean;
}
export const Icon = styled(ReactSVG)<IconProps>`
  ${({ defaultcolor, theme }) =>
    defaultcolor &&
    css`
      path {
        fill: ${theme.font.color.quintenary};
      }
    `}
`;
