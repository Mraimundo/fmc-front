import React, { useCallback } from 'react';
import getAddressInfo from 'services/address/getAddressInfoFromZipCode';
import numbersOnly from 'util/numbersOnly';
import { useFormContext } from 'react-hook-form';
import { useToast } from 'context/ToastContext';

import { Input, PublicPlaceSelect, UfSelect } from './styles';

interface Props {
  inputRole: 'primary' | 'secondary';
}

const AddressFields: React.FC<Props> = ({ inputRole }) => {
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
      <Input
        name="address.zip_code"
        label="CEP*"
        inputRole={inputRole}
        onBlur={e => handleCepBlur(numbersOnly(e.target.value))}
        pattern="XXXXX-XXX"
        numbersOnly
      />

      <PublicPlaceSelect name="public_place_select" inputRole={inputRole} />

      <Input name="address.street" label="Endereço*" inputRole={inputRole} />

      <Input name="address.number" label="Número*" inputRole={inputRole} />

      <Input
        name="address.complement"
        label="Complemento"
        inputRole={inputRole}
      />

      <Input name="address.district" label="Bairro*" inputRole={inputRole} />

      <Input name="address.city" label="Município*" inputRole={inputRole} />

      <UfSelect
        name="state_code_select"
        label="Estado*"
        inputRole={inputRole}
      />
    </>
  );
};

export default AddressFields;
