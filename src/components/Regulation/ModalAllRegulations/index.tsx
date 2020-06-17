import React, { useEffect, useState, useCallback } from 'react';
import parser from 'html-react-parser';
import getAllRegulations from 'services/register/regulation/getAllRegulations';
import getRegulationById from 'services/register/regulation/getRegulationById';
import { Button } from 'components/shared';
import {
  Regulation,
  RegulationType,
} from 'services/register/regulation/interfaces/IRegulation';
import { REGULATIONS_TYPE } from 'config/constants';
import logoImg from 'assets/images/logo.png';

import {
  Modal,
  Container,
  Content,
  Title,
  SubTitle,
  Accordion,
  ContentRegulation,
  Actions,
} from './styles';

const TITLES = {
  [REGULATIONS_TYPE.dataTerm]: 'Termos da Lei de Segurança de Dados',
  [REGULATIONS_TYPE.regulationOfCampaign]: 'Regulamento do Programa Juntos',
  [REGULATIONS_TYPE.safraTerm]: 'Acordos de Safras',
};

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
}

const ModalAllRegulations: React.FC<Props> = ({ isOpen, onRequestClose }) => {
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
    });
  }, []);

  const handleOpenRegulation = useCallback(
    async (regulationId: number) => {
      const regulation = await getRegulationById(regulationId);
      return (
        <>
          <ContentRegulation>
            {parser(regulation?.content || '')}
          </ContentRegulation>
          <Actions>
            <Button buttonRole="tertiary" type="button" loading={loading}>
              Aceitar
            </Button>
            <Button buttonRole="secondary" type="button">
              Download
            </Button>
          </Actions>
        </>
      );
    },
    [loading],
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="primary"
      shouldCloseOnEsc={false}
    >
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
