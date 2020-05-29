import styled from 'styled-components';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  span {
    background-color: ${({ theme, type }) =>
      theme.tooltip[type].backgroundColor};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme, type }) => theme.tooltip[type].fontColor};

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s, visibility 0.4s;
    will-change: opacity visibility;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: ${({ theme, type }) => theme.tooltip[type].borderColor}
        transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
