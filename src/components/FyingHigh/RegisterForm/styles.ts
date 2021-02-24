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
  background-color: #efefef;
  h2 {
    margin-bottom: 2rem;
    color: #3b302a;
  }
`;

export const Button = styled(DefaultButton)`
  text-transform: uppercase;
`;

export const Input = styled(DefaultInput)`
  font-size: 1.5em;
`;
