import React, { useCallback, useRef } from 'react';
import { useToast } from 'context/ToastContext';
import { Channel } from 'state/modules/points-simulator/interfaces';
import { formatDate } from 'util/datetime';
import { SaveSimulationDTO } from 'services/points-simulator/interfaces/dtos';

import { DefaultModal, Table, Button, Content } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  simulationDate: Date;
  channel: Channel;
  onSave(data: Omit<SaveSimulationDTO, 'jsonDataInString'>): Promise<void>;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  simulationDate,
  channel,
  onSave,
}) => {
  const inputSimulationNameRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

  const handleSaveClick = useCallback(async () => {
    const simulationName = inputSimulationNameRef?.current?.value;

    if (!simulationName) {
      addToast({
        type: 'error',
        title: 'Por favor escolha um nome para a simulação!',
      });
      return;
    }

    await onSave({
      channelId: channel.id,
      simulationName,
    });
    addToast({
      type: 'success',
      title: 'Simulação salva com sucesso!',
    });
    onRequestClose();
  }, [inputSimulationNameRef, addToast, onSave, channel, onRequestClose]);

  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose} zIndex={10}>
      <Content>
        <h3>Salvar Simulação</h3>
        <Table>
          <thead>
            <tr>
              <th>Simulado em</th>
              <th>Grupo de cliente</th>
              <th>Nome da Simulação</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatDate(simulationDate)}</td>
              <td>{channel.groupName}</td>
              <td>
                <input type="text" ref={inputSimulationNameRef} />
              </td>
              <td>
                <Button
                  type="button"
                  buttonRole="tertiary"
                  onClick={handleSaveClick}
                >
                  Salvar
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </DefaultModal>
  );
};

export default Modal;
