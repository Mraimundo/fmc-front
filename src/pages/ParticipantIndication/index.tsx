import React, { useEffect, useState, useCallback } from 'react';

import getTableListData from 'services/participantIndication/getParticipantsList';
import { ParticipantIndication as IParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import indicateParticipant from 'services/participantIndication/indicateParticipant';
import { useToast } from 'context/ToastContext';

import { Link } from 'react-router-dom';
import Logo from './Logo';
import StatusBox from './StatusBox';
import Filters from './Filters';
import Table from './Table';
import Form from './Form';
import { Container, Content, ContentForm } from './styles';

const ParticipantIndication: React.FC = () => {
  const [tableData, setTableData] = useState<IParticipantIndication[]>([]);
  const [formOpened, setFormOpened] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    getTableListData().then(list => setTableData(list));
  }, []);

  const saveIndication = useCallback(
    async (data: ICreateParticipantIndicateDTO): Promise<void> => {
      try {
        await indicateParticipant(data);
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha na validação dos dados. Por favor entre em contato com o suporte',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    return () => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    };
  }, []);

  return (
    <Container>
      <Logo />
      <Content>
        <h3>Indique um participante</h3>
        <Link to="/">Main</Link>
        <StatusBox
          percentActivated={10}
          onAddClick={() => setFormOpened(!formOpened)}
          opened={formOpened}
        />
        <ContentForm show={formOpened}>
          <Form saveIndication={saveIndication} />
        </ContentForm>

        <span>Usuários indicados</span>
        <Filters />
        <Table data={tableData} />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
