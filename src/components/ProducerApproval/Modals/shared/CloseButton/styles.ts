import styled from 'styled-components';

export const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;
