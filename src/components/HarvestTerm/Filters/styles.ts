import styled from 'styled-components';

import BaseInput from 'components/shared/Input/BaseInput';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export const SelectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled(BaseInput)`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-items: center;
  }
`;

export const Button = styled(DefaultButton)`
  max-width: 120px;
  margin-left: 10px;
`;
