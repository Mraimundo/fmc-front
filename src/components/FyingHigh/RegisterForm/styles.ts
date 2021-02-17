import styled from 'styled-components';
import { Input as DefaultInput, Button as DefaultButton } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  background-color: #EFEFEF;
  h2 {
    margin-bottom: 2rem;
    color: #3B302A;
  }
`;

export const Button = styled(DefaultButton)`
  text-transform: uppercase;
  background-color: #3B302A;
`;

export const Input = styled(DefaultInput)`

`;
