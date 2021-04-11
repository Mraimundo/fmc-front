import styled from 'styled-components';
import BaseInput from 'components/shared/Input/BaseInput';

export const Input = styled(BaseInput)`
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const BoxPhone = styled.div`
  display: flex;
  max-width: 499px;
  > div {
    justify-content: flex-end;
    width: 117px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;
