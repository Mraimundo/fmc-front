import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import getAddressInfo from 'services/address/getAddressInfoFromZipCode';
import { FiUser } from 'react-icons/fi';
import {
  Input,
  Separator,
  GraduationSelect,
  MaritalStatusSelect,
} from './styles';

interface Props {
  inputRole: 'primary' | 'secondary';
}

const ExtraFieldsForParticipant: React.FC<Props> = ({ inputRole }) => {
  const { setValue } = useFormContext();

  const handleCepBlur = useCallback(
    zipCode => {
      getAddressInfo(zipCode).then(
        ({ endereco, bairro, cidade, estado: { sigla } }) => {
          setValue('address.street', endereco);
          setValue('address.district', bairro);
          setValue('address.city', cidade);
          setValue('address.state_code', sigla);
        },
      );
    },
    [setValue],
  );

  return (
    <>
      <Separator />
      <Input name="gender" icon={FiUser} label="Gênero" inputRole={inputRole} />

      <Input
        name="birth_date"
        icon={FiUser}
        label="Data de nascimento"
        inputRole={inputRole}
        pattern="XX/XX/XXXX"
      />

      <GraduationSelect name="education_level" inputRole={inputRole} />

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

      <MaritalStatusSelect name="marital_status" inputRole={inputRole} />

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
        onBlur={e => handleCepBlur(e.target.value)}
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
