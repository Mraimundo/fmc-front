import React, { useCallback } from 'react';
import { ReactSVG } from 'react-svg';

import routeMap from 'routes/route-map';
import { Button } from 'components/shared';
import closeIcon from 'assets/images/training/close-icon.svg';
import history from 'services/history';

import { Modal, Container, Content, Close, Actions } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
}

const AutoindicateModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const handleOkClick = useCallback(async () => {
    onRequestClose();
    history.push(routeMap.profile);
  }, [onRequestClose]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>Auto Indicação para o Catálogo de Prêmios</h3>
          <p>
            Para participar do Catálogo de Prêmios você precisa preencher os
            dados obrigatórios do Catálogo de Prêmios.
          </p>
          <p>
            {`Para isso, basta acessar o seu Perfil, marcar a opção "Participar do
            Catálogo de Prêmios" e preencher os dados obrigatórios.`}
          </p>
        </Content>
        <Actions>
          <p>Deseja fazer isso agora?</p>
          <div>
            <Button type="button" buttonRole="primary" onClick={handleOkClick}>
              Sim
            </Button>
            <Button type="button" buttonRole="primary" onClick={onRequestClose}>
              Não
            </Button>
          </div>
        </Actions>
      </Container>
    </Modal>
  );
};

export default AutoindicateModal;
