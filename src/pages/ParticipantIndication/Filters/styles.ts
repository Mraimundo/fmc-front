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

  @media screen and (max-width: 720px) {
    margin-top: 10px;
    form {
      flex-direction: column;

      > button {
        width: 100%;
      }
    }
  }
`;

export const Button = styled(DefaultButton)`
  width: 137px;
  height: 36px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 16px;
`;

export const RolesSelect = styled(DefaultRolesSelect)`
  flex: 1;
  margin-right: 20px;

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    margin-left: 0;
    font-size: 16px;
  }

  ._inputContainer {
    height: 40px;
  }

  @media screen and (max-width: 720px) {
    margin-right: 0;
    margin-top: 8px;
  }
`;

export const FilialSelect = styled(DefaultFilialSelect)`
  flex: 1;

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    margin-left: 0;
    font-size: 16px;
  }

  margin-right: 20px;
  ._inputContainer {
    height: 40px;
  }

  @media screen and (max-width: 720px) {
    margin-right: 0;
  }
`;
