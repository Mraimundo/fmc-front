import styled from 'styled-components';
import { Button } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 20px;
    font-weight: bold;
    color: #193b4e;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    border: 1px solid #193b4e;
    width: 290px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #193b4e;
    font-weight: bold;
    background: #efefef;
  }

  label {
    button {
      text-decoration: none;
      border: 1px solid #193b4e;
      width: 290px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      color: #193b4e;
      font-weight: bold;
      background: #efefef;
    }

    input {
      display: none;
    }
  }
`;

export const SaveButton = styled(Button)`
  width: 180px;
  height: 45px;
  margin-top: 35px;
  margin-bottom: 10px;
  align-self: center;
`;
