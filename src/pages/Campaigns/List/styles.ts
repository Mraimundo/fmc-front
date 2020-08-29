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
  padding: 40px 60px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;

export const CampaignBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  background: #efefef;
  width: 100%;
  max-width: 557px;
  margin-top: 20px;

  > img {
    width: 100%;
    max-width: 520px;
    object-fit: cover;
  }

  > div {
    display: flex;
    padding: 10px 0;
    align-items: center;

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;

      > h3 {
        color: ${({ theme }) => theme.font.color.primary};
        font-size: 18px;
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }

      > span {
        color: ${({ theme }) => theme.font.color.secondary};
        font-size: 14px;
        font-family: ${({ theme }) => theme.font.fontFamily.condensed};
        margin-top: 10px;
      }
    }

    > button {
      border-radius: 5px;
      text-transform: uppercase;
      width: 122px;
      height: 38px;
      font-size: 14px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      margin: 0;
      padding: 0;
    }
  }
`;
