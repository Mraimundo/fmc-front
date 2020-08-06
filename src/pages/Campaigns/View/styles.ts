import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  background: #fff;
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
    border-radius: 5px;
    width: 232px;
    height: 48px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    align-self: center;
    margin: 25px 0;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;
