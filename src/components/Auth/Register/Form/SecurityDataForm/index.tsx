import React from 'react';

import PasswordHelp from 'components/shared/PasswordHelp';
import { Title, PasswordInput, Button } from './styles';

interface Props {
  inputRole: 'primary' | 'secondary';
  loading: boolean;
  actived: boolean;
}

const SecurityDataForm: React.FC<Props> = ({ inputRole, loading, actived }) => {
  return (
    <div style={{ display: actived ? 'block' : 'none' }}>
      <Title>Definir senha</Title>
      <PasswordInput
        name="password"
        label="Senha"
        inputRole={inputRole}
        help={PasswordHelp}
      />
      <PasswordInput
        name="password_confirmation"
        label="Confirmar Senha"
        inputRole={inputRole}
      />
      <Button type="submit" buttonRole="primary" loading={loading}>
        Salvar
      </Button>
    </div>
  );
};

export default SecurityDataForm;
