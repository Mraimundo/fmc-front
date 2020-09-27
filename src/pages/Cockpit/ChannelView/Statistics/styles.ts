import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 25px;
  width: 100%;
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
