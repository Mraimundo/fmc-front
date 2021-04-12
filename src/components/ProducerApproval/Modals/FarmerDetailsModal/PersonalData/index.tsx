import React from 'react';

// import { Container } from './styles';
import { Participant } from 'services/auth/interfaces/Participant';
import ComponentsByProfile from 'components/Auth/Register/Form/Commom/ComponentsByProfile';
// import Avatar from 'components/Avatar';
import { Input, BoxPhone, Avatar } from '../shared/styles';

interface PersonalDataProps {
  participant: Participant;
  inputRole?: 'primary' | 'secondary';
}

const PersonalData: React.FC<PersonalDataProps> = ({
  participant,
  inputRole = 'primary',
}) => {
  return (
    <div style={{ display: 'block' }}>
      <Avatar
        name={participant.name}
        picture={participant.picture}
        circleDimension={150}
      />
      <ComponentsByProfile participant={participant} inputRole={inputRole} />
      <Input
        name="nick_name"
        label="Como gostaria de ser chamado"
        inputRole={inputRole}
        value={participant.nick_name}
      />
      <Input
        name="name"
        label="Nome completo"
        inputRole={inputRole}
        value={participant.name}
      />
      <Input
        name="email"
        label="E-mail"
        inputRole={inputRole}
        value={participant.email}
      />
      <Input
        name="cpf"
        label="CPF"
        pattern="XXX.XXX.XXX-XX"
        inputRole={inputRole}
        value={participant.cpf}
      />

      <BoxPhone>
        <Input
          name="area_code"
          pattern="(XX)"
          label="DDD"
          inputRole={inputRole}
          value={participant.area_code}
        />
        <Input
          name="cell_phone"
          label="Celular"
          pattern="X XXXX-XXXX"
          inputRole={inputRole}
          value={participant.cell_phone}
        />
      </BoxPhone>

      <Input
        name="gender"
        label="Gênero"
        inputRole={inputRole}
        value={participant.gender}
      />
      <Input
        name="medium"
        label="Em qual Canal você compra os produtos FMC?"
        inputRole={inputRole}
        value={participant.medium}
      />
      <Input
        name="get_to_know"
        label="Como ficou conhecendo o Portal Juntos FMC?"
        inputRole={inputRole}
        value={participant.get_to_know}
      />
      <Input
        name="formatted_birth_date"
        label="Data de nascimento"
        inputRole={inputRole}
        pattern="XX/XX/XXXX"
        value={participant.birth_date}
      />
      <Input
        name="zip_code"
        label="CEP"
        inputRole={inputRole}
        value={participant.address?.zip_code ?? ''}
      />
      <Input
        name="number"
        label="Número"
        inputRole={inputRole}
        value={participant.address?.number ?? ''}
      />
      <Input
        name="complement"
        label="Complemento"
        inputRole={inputRole}
        value={participant.address?.complement ?? ''}
      />
      <Input
        name="district"
        label="Bairro"
        inputRole={inputRole}
        value={participant.address?.district ?? ''}
      />
      <Input
        name="city"
        label="Cidade"
        inputRole={inputRole}
        value={participant.address?.city ?? ''}
      />
      <Input
        name="state_code"
        label="Estado"
        inputRole={inputRole}
        value={participant.address?.state_code ?? ''}
      />
    </div>
  );
};

export default PersonalData;
