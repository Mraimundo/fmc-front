import React from 'react';

import { Container, Modal } from './styles';

const ModalAllRegulations: React.FC = () => {
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
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </Container>
    </Modal>
  );
};

export default ModalAllRegulations;
