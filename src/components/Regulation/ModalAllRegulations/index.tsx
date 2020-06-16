import React, { useEffect, useState } from 'react';
import getAllRegulations from 'services/register/regulation/getAllRegulations';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import logoImg from 'assets/images/logo.png';

import { Modal, Container, Content, Title, SubTitle } from './styles';

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
          {dataRegulations.length > 0 && (
            <>
              <SubTitle>Termos da Lei de Segurança de Dados</SubTitle>
              {dataRegulations.map(item => (
                <
              ))}
            </>
          )}

          <SubTitle>Regulamento do Programa Juntos</SubTitle>
          <SubTitle>Acordos de Safras</SubTitle>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalAllRegulations;
