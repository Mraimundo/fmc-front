import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  justify-content: center;
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 0.9em;
  margin-bottom: 2em;
  margin-top: 1em;
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: #a4b0b7;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 5px;
  }
`;
