import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  img {
    padding: 1px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;
