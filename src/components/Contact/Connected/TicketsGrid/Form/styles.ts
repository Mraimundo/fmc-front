import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px;
  align-items: center;

  > button {
    margin-left: 20px;
    width: 200px;
    height: 45px;
  }
`;
