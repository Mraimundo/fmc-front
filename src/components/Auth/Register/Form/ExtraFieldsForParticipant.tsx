import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import getAddressInfo from 'services/address/getAddressInfoFromZipCode';
import numbersOnly from 'util/numbersOnly';
import { useToast } from 'context/ToastContext';
import {
  Title,
  Input,
  Separator,
  GraduationSelect,
  MaritalStatusSelect,
  GenderSelect,
  PublicPlaceSelect,
  UfSelect,
  UfSelectRG,
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
          setValue('state_code_select', { value: sigla, title: sigla });
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

      <Title>Completar dados - obrigatório para o marketplace</Title>

      <GenderSelect name="gender_select" inputRole={inputRole} />

      <Input
        name="formatted_birth_date"
        label="Data de nascimento"
        inputRole={inputRole}
        pattern="XX/XX/XXXX"
      />

      <GraduationSelect name="education_level_select" inputRole={inputRole} />

      <Input name="place_of_birth" label="Naturalidade" inputRole={inputRole} />

      <Input name="nationality" label="Nacionalidade" inputRole={inputRole} />

      <MaritalStatusSelect name="marital_status_select" inputRole={inputRole} />

      <Input name="rg" label="RG" inputRole={inputRole} maxLength={10} />

      <Input name="rg_emitter" label="Órgão emissor" inputRole={inputRole} />

      <UfSelectRG
        name="rg_emitter_uf_select"
        label="UF do Órgão Emissor"
        inputRole={inputRole}
      />

      <Input
        name="pis_nis"
        label="N° inscrição na Previdência Social (PIS ou NIS)"
        inputRole={inputRole}
      />

      <Input
        name="address.zip_code"
        label="CEP"
        inputRole={inputRole}
        onBlur={e => handleCepBlur(numbersOnly(e.target.value))}
        pattern="XXXXX-XXX"
        numbersOnly
      />

      <PublicPlaceSelect name="public_place_select" inputRole={inputRole} />

      <Input name="address.street" label="Endereço" inputRole={inputRole} />

      <Input name="address.number" label="Número" inputRole={inputRole} />

      <Input
        name="address.complement"
        label="Complemento"
        inputRole={inputRole}
      />

      <Input name="address.district" label="Bairro" inputRole={inputRole} />

      <Input name="address.city" label="Município" inputRole={inputRole} />

      <UfSelect name="state_code_select" label="Estado" inputRole={inputRole} />
    </>
  );
};

export default ExtraFieldsForParticipant;
