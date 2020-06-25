import React, { useEffect, useState, useCallback } from 'react';

import getTableListData from 'services/participantIndication/getParticipantsList';
import { ParticipantIndication as IParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import getIndicationTeamDetails from 'services/participantIndication/getIndicationTeamDetails';
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
  const [activePercentage, setActivePercentage] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    getIndicationTeamDetails().then(({ active_percentage }) =>
      setActivePercentage(Math.ceil(active_percentage)),
    );
  }, []);

  const filter = useCallback(async (roleId = 0, subsidiaryId = 0) => {
    setFetching(true);
    setTableData([]);
    getTableListData({ roleId, subsidiaryId }).then(list => {
      setTableData(list);
      setFetching(false);
    });
  }, []);

  useEffect(() => {
    if (refresh) {
      filter();
      setRefresh(false);
    }
  }, [refresh, filter]);

  const saveIndication = useCallback(
    async (data: ICreateParticipantIndicateDTO): Promise<boolean> => {
      try {
        await indicateParticipant(data);
        setFormOpened(false);
        addToast({
          title: 'Indicação realizada com sucesso',
        });
        setRefresh(true);
        return true;
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha na validação dos dados. Por favor entre em contato com o suporte',
          type: 'error',
        });
      }
      return false;
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
          percentActivated={activePercentage}
          onAddClick={() => setFormOpened(!formOpened)}
          opened={formOpened}
        />
        <ContentForm show={formOpened}>
          <Form saveIndication={saveIndication} />
        </ContentForm>

        <span>Usuários indicados</span>
        <Filters filter={filter} />
        <Table data={tableData} isFetching={isFetching} />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
