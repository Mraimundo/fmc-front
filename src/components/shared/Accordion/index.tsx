import React, { useEffect, useCallback, useState } from 'react';

import { Container, ListValuesTitleWrapper, ListValuesTitle } from './styles';

interface Props {
  children?: React.ReactNode;
  title?: string;
  type?: 'primary' | 'secondary';
  className?: string;
  loadChildren?(): React.ReactNode;
}

const Accordion: React.FC<Props> = ({
  title = '',
  className = '',
  type = 'primary',
  children,
  loadChildren,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    setInternalOpen(!internalOpen);
  }, [internalOpen]);

  return (
    <Container open={internalOpen} type={type} className={className}>
      <ListValuesTitleWrapper onClick={toggleAccordion}>
        <ListValuesTitle open={internalOpen} type={type}>
          <h3>{title}</h3>
        </ListValuesTitle>
      </ListValuesTitleWrapper>
      {internalOpen && (
        <>
          {typeof loadChildren === 'function' ? (
            <h1>Teste função</h1>
          ) : (
            <div>{children}</div>
          )}
        </>
      )}
    </Container>
  );
};

export default Accordion;
