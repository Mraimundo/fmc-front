import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 45px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;

export const MiniBox = styled.div`
  padding: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: 175px;
    object-fit: cover;
    @media (max-width: 767px) {
      height: 275px;
    }
  }

  h1 {
    font-size: 14px;
    color: #65554D;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-top: 6px;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    margin-top: 8px;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    margin-top: 6px;
  }

  h2 {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 5px 0;
  }

  h3 {
    font-size: 13px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 5px 0;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 120px;
    height: 25px;
    padding: 10px 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    background: #65554D;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    margin-top: 8px;
  }

  @media screen and (max-width: 720px) {
    padding: 0;
    max-width: 500px;
    justify-content: center;
    & + div {
      margin-top: 40px;
    }

    > span {
      align-self: flex-start;
    }

    > img {
      width: 100%;
    }
  }

  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

