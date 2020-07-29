import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  errors?: string[];
  importedLines: number;
}

const FinishImportModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  errors = [],
  importedLines,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>Resultado da importação</h3>
          <h4>
            A importação foi finalizada com{' '}
            {errors?.length > 0 ? 'errors!' : 'sucesso!'}
          </h4>
          <h5>Total de linhas importadas: {importedLines}</h5>
          {errors.length > 0 && (
            <>
              <span>Erros encontrados: </span>
              <ul>
                {errors.map((err, i) => (
                  <li key={`err-${i}`}>{err}</li>
                ))}
              </ul>
            </>
          )}
        </Content>
        <Button type="button" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default FinishImportModal;
