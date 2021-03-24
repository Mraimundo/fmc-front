import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};
  //background: #fff;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.primary};
  width: 100%;
  max-width: 439px;
  padding-top: 23px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 1rem;
`;
