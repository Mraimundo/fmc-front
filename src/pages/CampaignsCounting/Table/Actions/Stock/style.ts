import styled from 'styled-components';

export const Container = styled.button`
  font-size: 12px;
  color: ${({ theme }) => theme.font.color.quartenary};
  background: transparent;
  transition: color 0.2s;
  text-decoration: none;
  border-radius: 10px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  width: 86px;
  height: 29px;
  border: none;

  &:disabled {
    opacity: 0.7;
  }
`;
