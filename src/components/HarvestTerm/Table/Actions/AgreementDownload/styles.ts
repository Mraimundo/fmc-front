import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 6px;
    color: ${({ theme }) => theme.font.color.primary};
    transform: translateY(-1px);
  }

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
