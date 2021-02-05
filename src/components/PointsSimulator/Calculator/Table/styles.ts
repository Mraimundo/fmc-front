import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1030px;
  flex-direction: column;
  height: 100%;
  position: absolute;
`;

export const Container2 = styled.table`
  border-collapse: separate;
  border-spacing: 0 8px;
  width: 100%;
  max-width: 1030px;
  max-height: calc(100%);
  overflow-y: auto;

  th,
  td {
    &:nth-child(1) {
      width: 4.75728155339806%;
      border-radius: 5px 0 0 5px;
    }
    &:nth-child(2) {
      width: 12.9126213592233%;
    }
    &:nth-child(3) {
      width: 13.9805825242718%;
    }
    &:nth-child(4) {
      width: 14.6601941747573%;
    }
    &:nth-child(5) {
      width: 12.1359223300971%;
    }
    &:nth-child(6) {
      width: 10.4854368932039%;
      text-align: center;
    }
    &:nth-child(7) {
      width: 10.4854368932039%;
      text-align: center;
    }
    &:nth-child(8) {
      width: 10.4854368932039%;
      text-align: center;
    }
    &:nth-child(9) {
      width: 10.0970873786408%;
      border-radius: 0 5px 5px 0;
      text-align: center;
    }
  }
`;
