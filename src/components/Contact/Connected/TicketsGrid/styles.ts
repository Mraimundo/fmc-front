import styled, { css } from 'styled-components';

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
  cursor: pointer;
  border: 1px solid transparent;

  ${({ opened }) =>
    opened &&
    css`
      border-color: rgba(0, 0, 0, 0.2);
    `};

  color: #000;

  & + div {
    margin-top: 10px;
  }

  header {
    background: #efefef;
    width: 100%;
    display: grid;
    grid-template-columns: 150px auto 80px 80px;
    padding: 25px 20px;

    span {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #808285;
    }

    h4 {
      display: flex;
      align-items: center;

      font-size: 14px;
      color: #808285;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        color: #193b4e;
      }
    }
  }

  ._contentMessage {
    max-height: 0;
    overflow-y: hidden;
    ${({ opened }) =>
      opened &&
      css`
        max-height: 400px;
        overflow-y: auto;
      `};
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 170px auto 85px 80px;
  color: #000;
  width: 100%;
  padding-right: 20px;

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #193b4e;
    font-weight: bold;
    &:nth-child(3) {
      justify-self: center;
    }
  }
`;
