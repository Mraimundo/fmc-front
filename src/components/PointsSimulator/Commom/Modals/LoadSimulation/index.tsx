import React, { useCallback, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import deleteImg from 'assets/images/points-simulator/delete.svg';
import editImg from 'assets/images/points-simulator/edit.svg';

import { useToast } from 'context/ToastContext';
import { DefaultModal, Header, Table, Content, ActionsContent } from './styles';

export interface TableData {
  id: number;
  simulationDate: string;
  clientGroup: string;
  simulationName: string;
  jsonStateInString: string;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  onLoadState(jsonStateInString: string): void;
  onDeleteSimulation(simulationId: number): void | Promise<void>;
  tableData: TableData[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  tableData,
  onLoadState,
  onDeleteSimulation,
}) => {
  const { addToast } = useToast();

  const handleEditClick = useCallback(
    (jsonStateInString: string) => {
      onLoadState(jsonStateInString);
      onRequestClose();
    },
    [onLoadState, onRequestClose],
  );
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  const handleDelectClick = useCallback(
    async (simulationId: number) => {
      await onDeleteSimulation(simulationId);
      setDeletedIds(oldData => [...oldData, simulationId]);
      addToast({ type: 'success', title: 'Simulação excluída!' });
    },
    [onDeleteSimulation, addToast],
  );

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<TableData[]>([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredData(
        tableData.filter(
          item =>
            !deletedIds.includes(item.id) &&
            (inputSearchValue === '' ||
              item.clientGroup.toLowerCase().includes(inputSearchValue) ||
              item.simulationName.toLowerCase().includes(inputSearchValue)),
        ),
      );
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [inputSearchValue, tableData, deletedIds]);

  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose} zIndex={10}>
      <Content>
        <Header>
          <h3>Salvar Simulação</h3>
          <input
            type="text"
            placeholder="Grupo de cliente ou Nome de simulação"
            value={inputSearchValue}
            onChange={e => setInputSearchValue(e.target.value)}
          />
        </Header>

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
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.simulationDate}</td>
                <td>{item.clientGroup}</td>
                <td>{item.simulationName}</td>
                <td>
                  <ActionsContent>
                    <button type="button">
                      <ReactSVG
                        src={editImg}
                        onClick={() => handleEditClick(item.jsonStateInString)}
                      />
                    </button>
                    <button type="button">
                      <ReactSVG
                        src={deleteImg}
                        onClick={() => handleDelectClick(item.id)}
                      />
                    </button>
                  </ActionsContent>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </DefaultModal>
  );
};

export default Modal;
