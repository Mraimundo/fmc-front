import styled from 'styled-components';
import Modal from 'components/shared/Modal';

export const DefaultModal = styled(Modal)`
  ._modalContainer {
    max-width: 913px;
    max-height: 496px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 23px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    margin-left: 23px;
  }

  > input {
    width: 282px;
    height: 33px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #808285;
    font-size: 14px;
    padding: 15px;

    &::placeholder {
      font-size: 14px;
      text-align: center;
      width: 100%;
      color: #808285;
    }
  }
`;

export const ActionsContent = styled.div`
  display: flex;

  > button {
    border: none;
    background: transparent;

    &:active {
      transform: scale(0.9);
    }

    & + button {
      margin-left: 40px;
    }
  }
`;

export const Table = styled.table`
  margin-top: 17px;
  border-collapse: separate;
  border-spacing: 0 8px;
  width: 100%;

  thead {
    background: #707070;
    tr {
      background: #707070;
      th {
        background: #707070;
        padding: 0 15px;
        height: 68px;
        vertical-align: middle;
        text-align: left;
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
        font-size: 16px;
        color: #fff;
      }
    }
  }

  tbody {
    background: #efefef;
    tr {
      background: #efefef;
      td {
        background: #efefef;
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
        color: ${({ theme }) => theme.font.color.quartenary};
        font-size: 14px;
        padding: 0 15px;
        height: 50px;

        > input[type='text'] {
          width: 287px;
          height: 33px;
          border-radius: 5px;
          background: #fff;
          border: none;
          padding: 0 10px;
        }
      }
    }
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  height: 393px;
  margin-top: 18px;

  /*-ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }*/
`;

export const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;
