import React from 'react';
import DefaultModal from 'components/shared/Modal';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import { Container, Close } from './styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirmClick: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirmClick,
}) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="secondary"
    >
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <h3> Bem-vindo(a)! </h3>
        <p>
          Caso seja colaborador(a) de um canal Juntos FMC, por favor, solicite
          sua indicação de acesso diretamente no seu estabelecimento.
        </p>
        <p>
          Se você é um Produtor(a) que compra produtos FMC através das Revendas
          ou Cooperativas pertencentes ao programa Juntos FMC, clique no botão
          abaixo para se cadastrar.
        </p>
        <Button type="submit" buttonRole="quaternary" onClick={onConfirmClick}>
          SOU PRODUTOR
        </Button>
      </Container>
    </DefaultModal>
  );
};

export default ConfirmationModal;
