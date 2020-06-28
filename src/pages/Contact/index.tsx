import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { Button } from 'components/shared';

import { Container, Content } from './styles';

const Contact: React.FC = () => {
  const { addToast } = useToast();

  return (
    <Container>
      <Content>
        <h3>Fale Conosco</h3>
      </Content>
    </Container>
  );
};

export default Contact;
