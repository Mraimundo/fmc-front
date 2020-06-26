import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const MiniBox = styled.div`
  img {
    max-width: 100%;
  }

  span {
    font-size: 12px;
    color: #000;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #193b4e;
  }

  p {
    font-size: 12px;
    color: #000;
  }
`;
