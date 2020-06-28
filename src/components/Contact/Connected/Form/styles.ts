import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div + div {
    margin-top: 15px;
  }

  > button {
    margin-top: 25px;
  }
`;
