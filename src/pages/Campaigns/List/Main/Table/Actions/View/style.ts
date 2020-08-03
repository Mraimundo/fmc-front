import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /*justify-content: center;*/

  svg {
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1.1);
    }
  }
`;
