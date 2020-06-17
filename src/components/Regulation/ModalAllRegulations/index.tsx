import React, { useEffect, useState, useCallback } from 'react';
import getAllRegulations from 'services/register/regulation/getAllRegulations';
import getRegulationById from 'services/register/regulation/getRegulationById';
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
} from './styles';

const TITLES = {
  [REGULATIONS_TYPE.dataTerm]: 'Termos da Lei de Segurança de Dados',
  [REGULATIONS_TYPE.regulationOfCampaign]: 'Regulamento do Programa Juntos',
  [REGULATIONS_TYPE.safraTerm]: 'Acordos de Safras',
};

const ModalAllRegulations: React.FC = () => {
  const [dataRegulations, setDataRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [campaignRegulations, setCampaingRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [safraRegulations, setSafraRegulations] = useState<
    Omit<Regulation, 'content'>[]
  >([]);
  const [
    regulationSelected,
    setRegulationSelected,
  ] = useState<Regulation | null>(null);

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

  const openRegulation = useCallback(() => {
    return (
      regulationSelected && (
        <h1>
          <span>Regulaamento: {regulationSelected.id}</span>
        </h1>
      )
    );
  }, [regulationSelected]);

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
              >
                {openRegulation()}
              </Accordion>
            ))}
          </>
        )
      );
    },
    [],
  );

  return (
    <Modal
      isOpen
      onRequestClose={() => {
        console.log('oi');
      }}
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
