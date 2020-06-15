import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Input, Separator } from '../styles';

interface Props {
  inputRole: 'primary' | 'secondary';
}

const ExtraFieldsForParticipant: React.FC<Props> = ({ inputRole }) => {
  return (
    <>
      <Separator />
      <Input name="gender" icon={FiUser} label="Gênero" inputRole={inputRole} />

      <Input
        name="birth_date"
        icon={FiUser}
        label="Data de nascimento"
        inputRole={inputRole}
      />

      <Input
        name="education_level"
        icon={FiUser}
        label="Grau de instrução"
        inputRole={inputRole}
      />

      <Input
        name="place_of_birth"
        icon={FiUser}
        label="Naturalidade"
        inputRole={inputRole}
      />

      <Input
        name="nationality"
        icon={FiUser}
        label="Nacionalidade"
        inputRole={inputRole}
      />

      <Input
        name="marital_status"
        icon={FiUser}
        label="Estado civil"
        inputRole={inputRole}
      />

      <Input name="rg" icon={FiUser} label="RG" inputRole={inputRole} />

      <Input
        name="rg_emitter"
        icon={FiUser}
        label="Órgão emissor"
        inputRole={inputRole}
      />

      <Input
        name="rg_emitter_uf"
        icon={FiUser}
        label="UF do Órgão Emissor"
        inputRole={inputRole}
      />

      <Input
        name="pis_nis"
        icon={FiUser}
        label="N° inscrição na Previdência Social (PIS ou NIS)"
        inputRole={inputRole}
      />

      <Input
        name="address.zip_code"
        icon={FiUser}
        label="CEP"
        inputRole={inputRole}
      />

      <Input
        name="address.street"
        icon={FiUser}
        label="Endereço"
        inputRole={inputRole}
      />

      <Input
        name="address.number"
        icon={FiUser}
        label="Número"
        inputRole={inputRole}
      />

      <Input
        name="address.complement"
        icon={FiUser}
        label="Complemento"
        inputRole={inputRole}
      />

      <Input
        name="address.district"
        icon={FiUser}
        label="Bairro"
        inputRole={inputRole}
      />

      <Input
        name="address.city"
        icon={FiUser}
        label="Município"
        inputRole={inputRole}
      />

      <Input
        name="address.state_code"
        icon={FiUser}
        label="Estado"
        inputRole={inputRole}
      />
    </>
  );
};

export default ExtraFieldsForParticipant;
