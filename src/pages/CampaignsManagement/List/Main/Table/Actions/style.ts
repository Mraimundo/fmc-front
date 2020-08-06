import styled from 'styled-components';

interface ContainerProps {
  loading: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${({ loading }) => (loading ? 'center' : 'flex-start')};
  padding-top: 10px;
  padding-bottom: 10px;
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
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ActionsBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  > button {
    width: 85px;
    height: 28px;
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
    & + button {
      margin-left: 8px;
    }
  }
`;
