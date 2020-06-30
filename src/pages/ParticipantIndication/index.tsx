import React, { useEffect, useState, useCallback } from 'react';
import produce from 'immer';

import { INACTIVE, PRECHARGE } from 'config/constants/vendavallStatus';
import Logo from 'components/shared/Logo';
import getTableListData from 'services/participantIndication/getParticipantsList';
import { ParticipantIndication as IParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';
import ICreateParticipantIndicateDTO from 'services/participantIndication/dtos/ICreateParticipantIndicateDTO';
import getIndicationTeamDetails from 'services/participantIndication/getIndicationTeamDetails';
import {
  create as indicate,
  edit as editIndication,
} from 'services/participantIndication/indicateParticipant';
import resendIndicationEmail from 'services/participantIndication/resendIndicationEmail';
import inactiveParticipantFromIndication from 'services/participantIndication/inactiveParticipantFromIndication';
import { useToast } from 'context/ToastContext';

import getEstablishments, {
  Establishment,
} from 'services/auth/getEstablishments';
import IEditParticipantIndicateDTO from 'services/participantIndication/dtos/IEditParticipantIndicateDTO';
import StatusBox from './StatusBox';
import Filters from './Filters';
import Table from './Table';
import Form, { FormData } from './Form';
import Establishments from './Establishments';
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

  const filter = useCallback(
    async (establishmentId, roleId = 0, subsidiaryId = 0) => {
      setFetching(true);
      setTableData([]);
      getTableListData({ roleId, subsidiaryId, establishmentId }).then(list => {
        setTableData(list);
        setFetching(false);
      });
    },
    [],
  );

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

  const handleResendIndication = useCallback(
    async (indicationId: number): Promise<void> => {
      try {
        await resendIndicationEmail(indicationId);
        addToast({
          title: 'Indicação reenviada no email do participante com sucesso',
        });
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha no reenvio do email. Por favor entre em contato com o suporte',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  const handleInactiveParticipant = useCallback(
    async (indicationId: number): Promise<void> => {
      try {
        await inactiveParticipantFromIndication(indicationId);
        setTableData(
          produce(tableData, draft => {
            draft.map(item => {
              if (item.id === indicationId) {
                item.participant.status = INACTIVE;
              }
              return item;
            });
          }),
        );
        addToast({
          title: 'Participante inativado com sucesso',
        });
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao inativar participante. Por favor entre em contato com o suporte',
          type: 'error',
        });
      }
    },
    [addToast, tableData],
  );

  useEffect(() => {
    getEstablishments().then(list => setEstablishments(list));
  }, []);

  useEffect(() => {
    if (establishmentSelected) {
      getIndicationTeamDetails(
        establishmentSelected?.id,
      ).then(({ active_percentage }) =>
        setActivePercentage(Math.ceil(active_percentage)),
      );
      setRefresh(true);
    }
  }, [establishmentSelected]);

  useEffect(() => {
    if (establishments.length > 0) {
      setEstablishmentSelected(establishments[0]);
    }
  }, [establishments]);

  useEffect(() => {
    if (!establishmentSelected) return;
    if (refresh) {
      filter(establishmentSelected.id);
      setRefresh(false);
    }
  }, [refresh, filter, establishmentSelected]);

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
      <Logo />
      <Content>
        <h3>
          Indique um participante
          {establishmentSelected && ` na revenda ${establishmentSelected.name}`}
          {establishments.length > 1 && (
            <Establishments
              establishments={establishments}
              setValue={setEstablishmentSelected}
              value={establishmentSelected}
            />
          )}
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
          onResendEmailClick={handleResendIndication}
          onInactiveParticipantClick={handleInactiveParticipant}
        />
      </Content>
    </Container>
  );
};

export default ParticipantIndication;
