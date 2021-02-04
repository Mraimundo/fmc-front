import styled from 'styled-components';
import Modal from 'components/shared/Modal';
import DefaultButton from 'components/shared/Button';

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

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    margin-left: 23px;
  }
`;

export const Table = styled.table`
  margin-top: 35px;
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

export const Button = styled(DefaultButton)`
  width: 101px;
  height: 33px;
  margin-top: 0;
  border-radius: 5px;
  text-transform: uppercase;
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
