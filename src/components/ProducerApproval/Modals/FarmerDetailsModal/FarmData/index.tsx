import React from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
import { Input, Separator, Title, ListContainer } from '../shared/styles';

interface FarmDataProps {
  participant: Participant | null;
  inputRole?: 'primary' | 'secondary';
}

const FarmData: React.FC<FarmDataProps> = ({
  participant,
  inputRole = 'secondary',
}) => {
  return (
    <div style={{ display: 'block' }}>
      <Input
        name="producer_group_name"
        label="Nome do grupo do produtor"
        inputRole={inputRole}
        disabled
        defaultValue={participant?.producer_group_name || ''}
      />
      {participant && participant?.members_group?.length > 0 && (
        <>
          <Separator />
          <Title>Razões Sociais do Grupo</Title>
          <ListContainer>
            <table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Nome ou Razão Social</th>
                  <th>CPF ou CNPJ</th>
                  <th>Inscrição Estadual</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {participant.members_group.map(item => (
                  <tr key={item.cpf_cnpj}>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.cpf_cnpj}</td>
                    <td>{item.ie}</td>
                    <td>{item.city}</td>
                    <td>{item.uf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>
        </>
      )}
    </div>
  );
};

export default FarmData;
