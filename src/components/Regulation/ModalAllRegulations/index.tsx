import React, { useEffect, useState, useCallback, useRef } from 'react';
import parser from 'html-react-parser';
import getAllRegulations from 'services/register/regulation/getAllRegulations';
import getRegulationById from 'services/register/regulation/getRegulationById';
import acceptRegulation from 'services/register/regulation/acceptRegulation';
import { Button } from 'components/shared';
import {
  Regulation,
  RegulationType,
} from 'services/register/regulation/interfaces/IRegulation';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import { REGULATIONS_TYPE } from 'config/constants';
import logoImg from 'assets/images/logo.png';

import ReactToPrint from 'react-to-print';

import {
  Modal,
  Container,
  Content,
  Title,
  SubTitle,
  Accordion,
  ContentRegulation,
  Actions,
  PrintRef,
} from './styles';

const TITLES = {
  [REGULATIONS_TYPE.dataTerm]: 'Termos da Lei de Segurança de Dados',
  [REGULATIONS_TYPE.regulationOfCampaign]: 'Regulamento do Programa Juntos',
  [REGULATIONS_TYPE.safraTerm]: 'Acordos de Safras',
};

interface Props {
  isOpen: boolean;
  onRequestClose?(): void;
}

const ModalAllRegulations: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const { updateParticipantData } = useAuth();
  const { addToast } = useToast();
  const [canAccept, setCanAccept] = useState(false);

  const [dataRegulations, setDataRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [campaignRegulations, setCampaingRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [safraRegulations, setSafraRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [acceptedIds, setAcceptedIds] = useState<number[]>([]);
  const [
    regulationSelected,
    setRegulationSelected,
  ] = useState<Regulation | null>(null);
  const t = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAllRegulations().then(regulations => {
      setDataRegulations(
        regulations.filter(regulation => regulation.type === 'data_term'),
      );
      setCampaingRegulations(
        regulations.filter(
          regulation => regulation.type === 'regulation_of_campaign',
        ),
      );
      setSafraRegulations(
        regulations.filter(regulation => regulation.type === 'safra_term'),
      );
      setAcceptedIds(
        regulations
          .filter(regulation => regulation.accepted)
          .map(regulation => regulation.id),
      );
    });
  }, []);

  const handleAcceptRegulation = useCallback(
    async (id: number, version: number, title: string) => {
      try {
        setLoading(true);
        await acceptRegulation(id, version);
        addToast({
          title: `Você aceitou o regulamento ${title}`,
          type: 'success',
        });
        if (
          acceptedIds.length > 0 &&
          safraRegulations.length +
            campaignRegulations.length +
            dataRegulations.length ===
            acceptedIds.length + 1
        ) {
          addToast({
            title: 'Você aceitou todos os regulamentos',
            type: 'success',
          });
          updateParticipantData();
          setLoading(false);
          return;
        }
        setAcceptedIds([...acceptedIds, id]);
      } catch {
        addToast({
          title: `Falha ao aceitar o regulamento ${title}`,
          type: 'error',
        });
      }

      setLoading(false);
    },
    [
      addToast,
      acceptedIds,
      safraRegulations,
      campaignRegulations,
      dataRegulations,
      updateParticipantData,
    ],
  );

  useEffect(() => {
    setCanAccept(false);
  }, [regulationSelected]);

  const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight
    ) {
      setCanAccept(true);
    }
  };

  const handleOpenRegulation = useCallback(
    async (regulationId: number) => {
      if (!regulationSelected || regulationId !== regulationSelected.id) {
        const regulation = await getRegulationById(regulationId);
        setRegulationSelected(regulation);
      }

      return (
        regulationSelected && (
          <>
            <ContentRegulation onScroll={handleDivScroll}>
              <PrintRef ref={t}>
                {parser(regulationSelected.content || '')}
              </PrintRef>
            </ContentRegulation>
            <Actions>
              {acceptedIds.indexOf(regulationSelected.id) === -1 && (
                <Button
                  buttonRole="tertiary"
                  type="button"
                  loading={loading}
                  onClick={() => {
                    handleAcceptRegulation(
                      regulationSelected.id,
                      regulationSelected.version,
                      regulationSelected.name,
                    );
                  }}
                  disabled={!canAccept}
                >
                  Aceitar
                </Button>
              )}

              <ReactToPrint
                trigger={() => {
                  return (
                    <Button buttonRole="secondary" type="button">
                      Download
                    </Button>
                  );
                }}
                content={() => t.current}
              />
            </Actions>
          </>
        )
      );
    },
    [
      loading,
      acceptedIds,
      handleAcceptRegulation,
      regulationSelected,
      canAccept,
    ],
  );

  const printRegulation = useCallback(
    (regulations: Omit<Regulation, 'content'>[], type: RegulationType) => {
      return (
        regulations.length > 0 && (
          <>
            <SubTitle>{TITLES[type]}</SubTitle>
            {regulations.map(item => (
              <Accordion
                key={`accordion-ragulation-${item.id}`}
                title={item.name}
                loadChildren={() => handleOpenRegulation(item.id)}
              >
                <h1>teste sem funçãooo</h1>
              </Accordion>
            ))}
          </>
        )
      );
    },
    [handleOpenRegulation],
  );

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container type="primary">
        <img src={logoImg} alt="Logo" />
        <Content>
          <Title>Regulamentos</Title>
          {dataRegulations.length > 0 &&
            printRegulation(dataRegulations, 'data_term')}
          {campaignRegulations.length > 0 &&
            printRegulation(campaignRegulations, 'regulation_of_campaign')}
          {safraRegulations.length > 0 &&
            printRegulation(safraRegulations, 'safra_term')}
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalAllRegulations;
