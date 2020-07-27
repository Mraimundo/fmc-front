import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 0;

  > button {
    width: 250px;
    height: 45px;
    margin: 25px 0;
    align-self: center;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;
