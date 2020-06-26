import styled from 'styled-components';
import {
  Input as DefaultInput,
  Button as DefaultButton,
} from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 24px;
    font-weight: bold;
    color: #193b4e;
    margin-top: 10px;
  }

  > h4 {
    font-size: 18px;
    font-weight: bold;
    color: #193b4e;
    margin-top: 25px;
  }

  > span {
    font-size: 18px;
    color: #193b4e;
    font-weight: bold;
    opacity: 0.7;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    > div {
      margin-top: 10px;
    }
    ._inputContainer {
      height: 44px;
    }
  }
`;

export const BoxPhone = styled.div`
  display: flex;
  > div {
    justify-content: flex-end;
    width: 140px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    > div + div {
      margin-top: 8px;
    }
  }
`;

export const Input = styled(DefaultInput)``;

export const Button = styled(DefaultButton)`
  height: 44px;
  width: 200px;
  align-self: flex-end;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 20px 0 10px 0;
  }
`;
