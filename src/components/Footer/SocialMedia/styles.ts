import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  li {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.font.color.primary};
    margin: 0.3em;
    transition: transform 150ms ease;

    a {
      text-decoration: none;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
