import React, { useEffect, useCallback, useState } from 'react';

import { Container, ListValuesTitleWrapper, ListValuesTitle } from './styles';

interface Props {
  children: React.ReactNode;
  title?: string;
  type?: 'primary' | 'secondary';
  className?: string;
  open?: boolean;
  onClick?(): void | Promise<void>;
}

const Accordion: React.FC<Props> = ({
  title = '',
  className = '',
  type = 'primary',
  children,
  open,
  onClick,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    if (typeof open === 'boolean') {
      setInternalOpen(open);
      return;
    }
    setInternalOpen(!internalOpen);
  }, [internalOpen, open]);

  return (
    <Container
      open={internalOpen}
      type={type}
      className={className}
      onClick={onClick}
    >
      <ListValuesTitleWrapper onClick={toggleAccordion}>
        <ListValuesTitle open={internalOpen} type={type}>
          <h3>{title}</h3>
        </ListValuesTitle>
      </ListValuesTitleWrapper>
      {internalOpen && <div>{children}</div>}
    </Container>
  );
};

export default Accordion;
