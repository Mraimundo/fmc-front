import React from 'react';
import { Container } from './styles';

const PasswordHelp: React.FC = () => {
  return (
    <Container>
      <h5>Sua senha deve conter:</h5>
      <ul>
        <li>No mínimo de 10 dígitos</li>
        <li>Pelo menos uma letra minúscula</li>
        <li>Pelo menos uma letra maiúscula</li>
        <li>Pelo menos um número</li>
      </ul>
    </Container>
  );
};

export default PasswordHelp;
