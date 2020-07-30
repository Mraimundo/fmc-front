import styled from 'styled-components';
import { Button } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.font.color.primary};
    width: 290px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    background: #efefef;
  }

  label {
    button {
      text-decoration: none;
      border: 1px solid ${({ theme }) => theme.font.color.primary};
      width: 290px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      color: ${({ theme }) => theme.font.color.primary};
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
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
