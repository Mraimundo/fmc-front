import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const Row = styled.div`
  /*display: flex;
  width: 100%;
  justify-content: space-around;*/

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 14px;
    text-align: center;
    color: #2c2b2b;
  }
`;
