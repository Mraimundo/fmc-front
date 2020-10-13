import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
  background: #fff;

  @media screen and (max-width: 720px) {
    padding: 0 5px;

    > div {
      & + div {
        margin-top: 10px;
      }
    }
  }
`;
