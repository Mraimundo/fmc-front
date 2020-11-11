import React from 'react';
import { ReactSVG } from 'react-svg';

import deleteImg from 'assets/images/points-simulator/delete.svg';
import editImg from 'assets/images/points-simulator/edit.svg';

import { DefaultModal, Header, Table, Content, ActionsContent } from './styles';

export interface TableData {
  id: number;
  simulationDate: string;
  clientGroup: string;
  simulationName: string;
}

interface ModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  tableData: TableData[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, tableData }) => {
  return (
    <DefaultModal isOpen={isOpen} onRequestClose={onRequestClose} zIndex={10}>
      <Content>
        <Header>
          <h3>Salvar Simulação</h3>
          <input
            type="text"
            placeholder="Grupo de cliente ou Nome de simulação"
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
            {tableData.map(item => (
              <tr key={item.id}>
                <td>{item.simulationDate}</td>
                <td>{item.clientGroup}</td>
                <td>{item.simulationName}</td>
                <td>
                  <ActionsContent>
                    <button type="button">
                      <ReactSVG src={editImg} />
                    </button>
                    <button type="button">
                      <ReactSVG src={deleteImg} />
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
