import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 30px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-left: 35px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 40px 10px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 40px 0;
`;
