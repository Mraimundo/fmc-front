import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  /*grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));*/
  grid-template-columns: 4fr 4fr 6fr;
  grid-gap: 0;
  width: 100%;
  background: #fff;
  padding: 18px 8px;
  height: 170px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 2px 30px 16px;
  width: 100%;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #34ffff;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    color: #052346;
  }
`;

export const ChannelCard = styled(Card)`
  padding: 2px 0;
  border: none;
  box-shadow: none;
  padding-right: 20px;
  padding-left: 16px;

  @media screen and (max-width: 720px) {
    padding: 10px 0 20px 0;
    align-items: center;

    > h3 {
      text-align: center;
    }
  }
`;

export const ParticipantsCard = styled(Card)`
  padding: 2px 0;
  border: none;
  box-shadow: none;
  border-left: 1px solid #052346;
  border-right: 1px solid #052346;
  align-items: center;
  width: 280px;

  > div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;

    > h3 {
      font-family: Helvetica-Neue-Bold;
      font-size: 20px;
      color: #052346;
    }

    > div {
      margin-bottom: 20px;
      margin-top: 12px;
    }
  }

  @media screen and (max-width: 720px) {
    border-top: 1px solid #052346;
    border-bottom: 1px solid #052346;
    border-left: none;
    border-right: none;
    width: 100%;
    padding: 20px 0 20px 0;
  }
`;

export const ActionsCard = styled(Card)`
  padding: 2px 0;
  border: none;
  box-shadow: none;
  padding-left: 30px;

  @media screen and (max-width: 720px) {
    align-items: center;
    padding: 20px 0 20px 0;
  }
`;

export const CardBody = styled.div`
  margin-top: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > span {
    font-size: 16px;
    color: #052346;
  }

  > p {
    font-size: 20px;
    color: #052346;

    > strong {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 22px;
      color: #052346;
    }
  }
`;
