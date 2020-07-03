import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import getAddressInfo from 'services/address/getAddressInfoFromZipCode';
import { FiUser } from 'react-icons/fi';
import numbersOnly from 'util/numbersOnly';
import { useToast } from 'context/ToastContext';
import {
  Input,
  Separator,
  GraduationSelect,
  MaritalStatusSelect,
  GenderSelect,
  PublicPlaceSelect,
} from './styles';

interface Props {
  inputRole: 'primary' | 'secondary';
}

const ExtraFieldsForParticipant: React.FC<Props> = ({ inputRole }) => {
  const { setValue } = useFormContext();
  const { addToast } = useToast();

  const handleCepBlur = useCallback(
    zipCode => {
      getAddressInfo(zipCode).then(data => {
        try {
          const {
            endereco,
            bairro,
            cidade,
            estado: { sigla },
          } = data;
          setValue('address.street', endereco);
          setValue('address.district', bairro);
          setValue('address.city', cidade);
          setValue('address.state_code', sigla);
        } catch {
          addToast({
            title:
              'Não encontrei o CEP inserido. Caso esteja correto forneça as informações do CEP manualmente.',
            type: 'info',
          });
        }
      });
    },
    [setValue, addToast],
  );

  return (
    <>
      <Separator />

      <GenderSelect name="gender_select" inputRole={inputRole} />

      <Input
        name="formatted_birth_date"
        icon={FiUser}
        label="Data de nascimento"
        inputRole={inputRole}
        pattern="XX/XX/XXXX"
      />

      <GraduationSelect name="education_level_select" inputRole={inputRole} />

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

      <MaritalStatusSelect name="marital_status_select" inputRole={inputRole} />

      <Input
        name="rg"
        icon={FiUser}
        label="RG"
        inputRole={inputRole}
        maxLength={10}
      />

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
        onBlur={e => handleCepBlur(numbersOnly(e.target.value))}
        pattern="XX.XXX-XXX"
        numbersOnly
      />

      <PublicPlaceSelect name="public_place_select" inputRole={inputRole} />

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
