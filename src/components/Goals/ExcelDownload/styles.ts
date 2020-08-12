import styled from 'styled-components';

export const Button = styled.a`
  background-color: #efefef;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 190px;
  height: 50px;
  font-size: 0.9em;
  transition: background-color 150ms ease;

  &:hover {
    background-color: #dddada;
  }

  svg {
    margin-right: 0.5em;
  }
`;
