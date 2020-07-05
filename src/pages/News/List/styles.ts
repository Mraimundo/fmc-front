import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > button {
    width: 250px;
    margin: 25px 0;
    height: 45px;
    align-self: center;
  }

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 24px;
    margin-left: 35px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;
