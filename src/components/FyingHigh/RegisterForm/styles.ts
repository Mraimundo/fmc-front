import styled from 'styled-components';
import {
  Input as DefaultInput,
  Button as DefaultButton,
} from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //padding: 2rem;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    //padding: 2rem 2rem;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: left;
    }
  }
`;

export const Button = styled(DefaultButton)`
  text-transform: uppercase;
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  background-color: #e63027;
`;

export const Input = styled(DefaultInput)`
  font-size: 1.2em;

  div {
    border: 0;
    border-radius: 0.1rem;
  }
`;

export const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;

  h2 {
    margin-bottom: 1rem;
    color: #65554d;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 2rem 2rem;

    h2 {
      text-align: left;
    }
  }
`;
