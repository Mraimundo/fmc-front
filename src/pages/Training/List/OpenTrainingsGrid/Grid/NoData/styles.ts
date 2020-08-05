import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background: #fff;

  img {
    max-width: 100%;
    height: 165px;
    object-fit: cover;
    cursor: pointer;
    opacity: 0.5;
  }

  h3 {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 0 0 2px 0;
    text-align: center;
  }

  @media screen and (max-width: 720px) {
    max-width: 500px;
    justify-content: center;
    align-items: center;

    > img {
      width: 100%;
    }
  }
`;
