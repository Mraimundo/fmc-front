import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';
import DefaultRolesSelect from 'components/shared/Vendavall/Roles/ProtectedRolesSelect';
import DefaultFilialSelect from 'components/shared/Vendavall/Establishments/FilialSelect';

export const Container = styled.div`
  margin-top: 20px;
  form {
    display: flex;
    align-items: center;

    > button {
      width: 150px;
      height: 40px;
    }
  }
`;

export const Button = styled(DefaultButton)``;

export const RolesSelect = styled(DefaultRolesSelect)`
  flex: 1;
  margin-right: 20px;

  > span {
    color: #193b4e;
    margin-left: 0;
    font-size: 15px;
  }

  ._inputContainer {
    height: 40px;
  }
`;

export const FilialSelect = styled(DefaultFilialSelect)`
  flex: 1;

  > span {
    color: #193b4e;
    margin-left: 0;
    font-size: 15px;
  }

  margin-right: 20px;
  ._inputContainer {
    height: 40px;
  }
`;
