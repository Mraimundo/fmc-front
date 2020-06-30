import React, { useEffect, useState, useCallback } from 'react';
import getAllRegulations from 'services/register/regulation/getAllRegulations';
import acceptRegulation from 'services/register/regulation/acceptRegulation';
import {
  Regulation,
  RegulationType,
} from 'services/register/regulation/interfaces/IRegulation';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import { REGULATIONS_TYPE } from 'config/constants';
import logoImg from 'assets/images/logo.png';

import RegulationBox from './RegulationBox';

import { Container, Content, Title, SubTitle, Accordion } from './styles';

const TITLES = {
  [REGULATIONS_TYPE.dataTerm]: 'Termos da Lei de Segurança de Dados',
  [REGULATIONS_TYPE.regulationOfCampaign]: 'Regulamento do Programa Juntos',
  [REGULATIONS_TYPE.safraTerm]: 'Acordos de Safras',
};

const AllRegulations: React.FC = () => {
  const { updateParticipantData } = useAuth();
  const { addToast } = useToast();

  const [dataRegulations, setDataRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [campaignRegulations, setCampaingRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [safraRegulations, setSafraRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [acceptedIds, setAcceptedIds] = useState<number[]>([]);

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
          return;
        }
        setAcceptedIds([...acceptedIds, id]);
      } catch {
        addToast({
          title: `Falha ao aceitar o regulamento ${title}`,
          type: 'error',
        });
      }
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

  const handleOpenRegulation = useCallback(
    async (regulationId: number) => {
      return (
        <RegulationBox
          regulationId={regulationId}
          acceptedIds={acceptedIds}
          handleAcceptRegulation={handleAcceptRegulation}
        />
      );
    },
    [acceptedIds, handleAcceptRegulation],
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
  );
};

export default AllRegulations;
