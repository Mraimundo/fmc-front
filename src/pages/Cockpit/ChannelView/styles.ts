import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 25px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 22px 30px 22px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);

  > h5 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    color: #2c2b2b;
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
    color: #717070;
  }

  > p {
    font-size: 20px;
    color: #717070;

    > strong {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 22px;
      color: #717070;
    }
  }
`;
