import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  img {
    padding: 1px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

export const Button = styled(DefaultButton)`
  height: 40px;
  width: 200px;
`;
