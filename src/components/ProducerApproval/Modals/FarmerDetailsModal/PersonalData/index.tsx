import React from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
// import ComponentsByProfile from 'components/Auth/Register/Form/Commom/ComponentsByProfile';
import { Input, BoxPhone, Avatar } from '../shared/styles';

interface PersonalDataProps {
  participant: Participant | null;
  inputRole?: 'primary' | 'secondary';
}

const PersonalData: React.FC<PersonalDataProps> = ({
  participant,
  inputRole = 'primary',
}) => {
  return (
    <div style={{ display: 'block' }}>
      <Avatar
        name={participant?.name ?? ''}
        picture={participant?.picture}
        circleDimension={150}
      />
      {/* <ComponentsByProfile participant={participant} inputRole={inputRole} /> */}
      <Input
        name="nick_name"
        label="Como gostaria de ser chamado"
        inputRole={inputRole}
        defaultValue={participant?.nick_name}
        disabled
      />
      <Input
        name="name"
        label="Nome completo"
        inputRole={inputRole}
        defaultValue={participant?.name}
        disabled
      />
      <Input
        name="email"
        label="E-mail"
        inputRole={inputRole}
        defaultValue={participant?.email}
        disabled
      />
      <Input
        name="cpf"
        label="CPF"
        pattern="XXX.XXX.XXX-XX"
        inputRole={inputRole}
        defaultValue={participant?.cpf}
        disabled
      />

      <BoxPhone>
        <Input
          name="area_code"
          pattern="(XX)"
          label="DDD"
          inputRole={inputRole}
          defaultValue={participant?.area_code}
          disabled
        />
        <Input
          name="cell_phone"
          label="Celular"
          pattern="X XXXX-XXXX"
          inputRole={inputRole}
          defaultValue={participant?.cell_phone}
          disabled
        />
      </BoxPhone>

      <Input
        name="gender"
        label="Gênero"
        inputRole={inputRole}
        defaultValue={participant?.gender}
        disabled
      />
      <Input
        name="medium"
        label="Em qual Canal você compra os produtos FMC?"
        inputRole={inputRole}
        defaultValue={participant?.medium}
        disabled
      />
      <Input
        name="get_to_know"
        label="Como ficou conhecendo o Portal Juntos FMC?"
        inputRole={inputRole}
        defaultValue={participant?.get_to_know}
        disabled
      />
      <Input
        name="formatted_birth_date"
        label="Data de nascimento"
        inputRole={inputRole}
        pattern="XX/XX/XXXX"
        defaultValue={participant?.birth_date}
        disabled
      />
      <Input
        name="zip_code"
        label="CEP"
        inputRole={inputRole}
        defaultValue={participant?.address?.zip_code ?? ''}
        disabled
      />
      <Input
        name="number"
        label="Número"
        inputRole={inputRole}
        defaultValue={participant?.address?.number ?? ''}
        disabled
      />
      <Input
        name="complement"
        label="Complemento"
        inputRole={inputRole}
        defaultValue={participant?.address?.complement ?? ''}
        disabled
      />
      <Input
        name="district"
        label="Bairro"
        inputRole={inputRole}
        defaultValue={participant?.address?.district ?? ''}
        disabled
      />
      <Input
        name="city"
        label="Cidade"
        inputRole={inputRole}
        defaultValue={participant?.address?.city ?? ''}
        disabled
      />
      <Input
        name="state_code"
        label="Estado"
        inputRole={inputRole}
        defaultValue={participant?.address?.state_code ?? ''}
        disabled
      />
    </div>
  );
};

export default PersonalData;
