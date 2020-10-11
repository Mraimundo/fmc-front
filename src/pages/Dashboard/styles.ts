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


