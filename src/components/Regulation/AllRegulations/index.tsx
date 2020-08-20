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

import RegulationBox from './RegulationBox';

import { Container, Content, Title, SubTitle, Accordion } from './styles';

const TITLES = {
  [REGULATIONS_TYPE.dataTerm]: 'Termos de Proteção de Dados',
  [REGULATIONS_TYPE.regulationOfCampaign]: 'Regulamento do Programa Juntos',
  [REGULATIONS_TYPE.safraTerm]: 'Termos de Safras',
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
        regulations.filter(
          regulation =>
            regulation.type === 'data_term' ||
            regulation.name.toLowerCase().includes('proteção de dados'),
        ),
      );
      setCampaingRegulations(
        regulations.filter(
          regulation =>
            regulation.type === 'regulation_of_campaign' &&
            !regulation.name.toLowerCase().includes('proteção de dados'),
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
                type="secondary"
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
      <Content>
        <Title>Regulamentos e Termos</Title>
        {campaignRegulations.length > 0 &&
          printRegulation(campaignRegulations, 'regulation_of_campaign')}
        {safraRegulations.length > 0 &&
          printRegulation(safraRegulations, 'safra_term')}
        {dataRegulations.length > 0 &&
          printRegulation(dataRegulations, 'data_term')}
        <a href="https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-TERMO_DE_USO.pdf&url=https://storage.juntosfmc.com.br/avatar/1597870012.5f3d8fbc16bc67.86487857.pdf">
          Download do Termos de Uso
        </a>
        <a href="https://juntosfmc-adm.vendavall.com.br/download?name=Portal_Juntos_FMC-POL%C3%8DTICA_DE_PRIVACIDADE.pdf&url=https://storage.juntosfmc.com.br/avatar/1597870070.5f3d8ff69a8341.23430608.pdf">
          Download da Política de Privacidade
        </a>
      </Content>
    </Container>
  );
};

export default AllRegulations;
