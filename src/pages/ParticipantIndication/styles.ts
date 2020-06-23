import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > h3 {
    font-size: 24px;
    font-weight: bold;
    color: #193b4e;
  }

  > span {
    font-size: 18px;
    font-weight: bold;
    color: #193b4e;
    margin-top: 35px;
  }
`;
