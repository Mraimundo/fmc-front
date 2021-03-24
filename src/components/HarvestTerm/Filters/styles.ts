import styled from 'styled-components';

import BaseInput from 'components/shared/Input/BaseInput';

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
  margin: 1rem 0;
`;
