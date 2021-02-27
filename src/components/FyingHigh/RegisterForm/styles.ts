import styled from 'styled-components';
import {
  Input as DefaultInput,
  Button as DefaultButton,
} from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  //background-color: #efefef;
  h2 {
    margin-bottom: 1rem;
    color: #65554d;
    text-align: center;
  }
`;

export const Button = styled(DefaultButton)`
  text-transform: uppercase;
`;

export const Input = styled(DefaultInput)`
  font-size: 0.9em;
`;
