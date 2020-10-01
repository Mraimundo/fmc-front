import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 920px;
  flex-direction: column;
  background: transparent;
  padding: 30px 0;

  @media screen and (max-width: 720px) {
    padding: 40px 10px;
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
  }

  @media screen and (max-width: 720px) {
    padding: 10px;

    > h3 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const List = styled.ul`
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

export const Link = styled.button`
  width: 122px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.font.color.quartenary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;
