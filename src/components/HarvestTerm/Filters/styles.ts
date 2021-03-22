import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
