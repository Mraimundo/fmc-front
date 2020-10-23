import React from 'react';
import DefaultModal from 'components/shared/Modal';
import { Button } from 'components/shared';
import { ContainerModal, InlineLink } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const FirstAccessMessage: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <DefaultModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="secondary"
    >
      <ContainerModal>
        <h3> Bem-vindo(a)! </h3>
        <p>
          Se você é um produtor(a) que compra produtos FMC por meio das revendas
          ou cooperativas pertencentes ao programa JUNTOS FMC,{' '}
          <InlineLink>clique aqui</InlineLink> para se cadastrar.
        </p>
        <p>
          Se for colaborador(a) de um canal JUNTOS FMC, por favor, solicite sua
          indicação de acesso diretamente ao seu estabelecimento.
        </p>
        <Button type="submit" buttonRole="quaternary" onClick={onRequestClose}>
          OK
        </Button>
      </ContainerModal>
    </DefaultModal>
  );
};

export default FirstAccessMessage;
