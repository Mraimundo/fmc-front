import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  margin-top: 35px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 128px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.font.color.quartenary};
    background: #fff;
    padding: 14px 20px;

    > span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 20px;
      color: ${({ theme }) => theme.font.color.quartenary};
    }

    & + li {
      margin-top: 30px;
    }
  }
`;

export const Link = styled.a`
  width: 122px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  color: ${({ theme }) => theme.font.color.quartenary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
