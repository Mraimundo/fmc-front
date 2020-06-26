import React, { useEffect, useState, useCallback } from 'react';

import getTableListData from 'services/participantIndication/getParticipantsList';
import { ParticipantIndication as IParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import getIndicationTeamDetails from 'services/participantIndication/getIndicationTeamDetails';
import {
  create as indicate,
  edit as editIndication,
} from 'services/participantIndication/indicateParticipant';
import { useToast } from 'context/ToastContext';

import getEstablishments, {
  Establishment,
} from 'services/auth/getEstablishments';
import IEditParticipantIndicateDTO from 'services/participantIndication/dtos/IEditParticipantIndicateDTO';
import StatusBox from './StatusBox';
import Filters from './Filters';
import Table from './Table';
import Form, { FormData } from './Form';
import { Container, Content, ContentForm } from './styles';

const ParticipantIndication: React.FC = () => {
  const [tableData, setTableData] = useState<IParticipantIndication[]>([]);
  const [formOpened, setFormOpened] = useState(false);
  const [activePercentage, setActivePercentage] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [indicationDataEdit, setIndicationDataEdit] = useState<
    FormData | undefined
  >(undefined);
  const [editing, setEditing] = useState(false);

  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [
    establishmentSelected,
    setEstablishmentSelected,
  ] = useState<Establishment | null>(null);

  const { addToast } = useToast();

  const filter = useCallback(async (roleId = 0, subsidiaryId = 0) => {
    setFetching(true);
    setTableData([]);
    getTableListData({ roleId, subsidiaryId }).then(list => {
      setTableData(list);
      setFetching(false);
    });
  }, []);

  const onEditClick = useCallback(
    (id: number): void => {
      const indication = tableData.find(item => item.id === id);
      if (!indication) {
        return;
      }
      const {
        area_code,
        cell_phone,
        cpf,
        email,
        name,
      } = indication.participant;
      setIndicationDataEdit({
        area_code,
        cell_phone,
        cpf,
        email,
        name,
        establishment_id: indication.establishment.id,
        role_select: {
          value: indication.role.id.toString(),
          title: indication.role.name,
        },
        subsidiary_select: {
          value: indication.subsidiary.id.toString(),
          title: indication.subsidiary.name,
        },
      });
      setEditing(true);
      setFormOpened(true);
    },
    [tableData],
  );

  const saveIndication = useCallback(
    async (
      data: ICreateParticipantIndicateDTO | IEditParticipantIndicateDTO,
    ): Promise<boolean> => {
      try {
        if (editing) {
          await editIndication(data as IEditParticipantIndicateDTO);
        } else {
          await indicate(data as ICreateParticipantIndicateDTO);
        }
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
    [addToast, editing],
  );

  useEffect(() => {
    getIndicationTeamDetails().then(({ active_percentage }) =>
      setActivePercentage(Math.ceil(active_percentage)),
    );
    getEstablishments().then(list => setEstablishments(list));
  }, []);

  useEffect(() => {
    if (establishments.length > 0) {
      setEstablishmentSelected(establishments[0]);
    }
  }, [establishments]);

  useEffect(() => {
    if (refresh) {
      filter();
      setRefresh(false);
    }
  }, [refresh, filter]);

  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    return () => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    };
  }, []);

  useEffect(() => {
    if (!formOpened) {
      setIndicationDataEdit(undefined);
    }
  }, [formOpened]);

  return (
    <Container>
      <Content>
        <h3>
          Indique um participante
          {establishmentSelected && ` na revenda ${establishmentSelected.name}`}
          {establishments.length > 0 && <span>Alterar revenda</span>}
        </h3>
        <StatusBox
          percentActivated={activePercentage}
          onAddClick={() => setFormOpened(!formOpened)}
          opened={formOpened}
        />
        {establishmentSelected && (
          <ContentForm show={formOpened}>
            <Form
              saveIndication={saveIndication}
              editing={editing}
              indicationData={indicationDataEdit}
              establishmentId={establishmentSelected.id}
            />
          </ContentForm>
        )}
        <span>Usuários indicados</span>
        <Filters filter={filter} />
        <Table
          data={tableData}
          isFetching={isFetching}
          onEditClick={onEditClick}
        />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
