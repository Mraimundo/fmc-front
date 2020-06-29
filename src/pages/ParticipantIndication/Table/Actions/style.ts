import styled from 'styled-components';

interface ContainerProps {
  loading: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 149px;
  display: flex;
  justify-content: ${({ loading }) => (loading ? 'center' : 'flex-start')};
  > span {
    & + span {
      margin-left: 12px;
    }
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
  }

  ._loading {
    svg {
      fill: #193b4e;
    }
  }
`;
