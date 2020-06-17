import React, { useEffect, useCallback, useState } from 'react';

import { Container, ListValuesTitleWrapper, ListValuesTitle } from './styles';

interface Props {
  children: React.ReactNode;
  title?: string;
  type?: 'primary' | 'secondary';
  className?: string;
  onOpen?(): void | Promise<void>;
}

const Accordion: React.FC<Props> = ({
  title = '',
  className = '',
  type = 'primary',
  children,
  onOpen,
}) => {
  const [open, isOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    isOpen(!open);
  }, [open]);

  useEffect(() => {
    if (typeof onOpen !== 'function') return;
    if (open) {
      onOpen();
    }
  }, [open, onOpen]);

  return (
    <Container open={open} type={type} className={className}>
      <ListValuesTitleWrapper onClick={toggleAccordion}>
        <ListValuesTitle open={open} type={type}>
          <h3>{title}</h3>
        </ListValuesTitle>
      </ListValuesTitleWrapper>
      {open && <div>{children}</div>}
    </Container>
  );
};

export default Accordion;
