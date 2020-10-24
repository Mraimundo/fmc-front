import styled from 'styled-components';

export const StatusIcon = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background: #fff;
  background-size: auto 90%;
  margin-right: 8px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  svg {
    height: 30px;
  }
  p {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 7px;
  }
`;
