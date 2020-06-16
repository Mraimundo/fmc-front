import React, { useCallback, useState } from 'react';

import { Container, ListValuesTitleWrapper, ListValuesTitle } from './styles';

interface Props {
  children: React.ReactNode;
  title?: string;
  type?: 'primary' | 'secondary';
  className?: string;
}

const Accordion: React.FC<Props> = ({
  title = '',
  className = '',
  type = 'primary',
  children,
}) => {
  const [open, isOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    isOpen(!open);
  }, [open]);

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
