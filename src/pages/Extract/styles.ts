import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
  color: ${({ theme }) => theme.font.color.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 0 25px;

  @media screen and (max-width: 720px) {
    padding: 0 20px;
  }
`;

export const PageTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: #193b4e;
`;
