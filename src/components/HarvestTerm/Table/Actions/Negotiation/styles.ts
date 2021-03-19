import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  svg {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1.1);
    }

    path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;
