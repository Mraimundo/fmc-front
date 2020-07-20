import React, { useState } from 'react';
import { Option } from 'components/shared/Select';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import {
  Container,
  CustomersSelect,
  MechanicsSelect,
  Box,
  CostumerDetails,
} from './styles';

const CampaignForm: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [dateSelected, setDateSelected] = useState<Date | null>(null);

  return (
    <Container>
      <h4>Solicitar criação de campanha</h4>
      <MechanicsSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Mecânica"
      />
      <h4>Público</h4>
      <CustomersSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Selecionar Clientes"
      />
      <CostumerDetails>
        <h3>Nome do CLiente</h3>
        <h4>Saldo R$ 3.000,00</h4>
        <ReactSVG src={deleteIcon} />
      </CostumerDetails>
      <h4>Período</h4>
      <Box>
        <DatePicker
          value={dateSelected}
          onChange={setDateSelected}
          placeholder="Data inicial"
        />
        <DatePicker
          value={dateSelected}
          onChange={setDateSelected}
          placeholder="Data final"
        />
      </Box>
    </Container>
  );
};

export default CampaignForm;
