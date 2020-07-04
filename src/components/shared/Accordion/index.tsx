import React, { useEffect, useCallback, useState } from 'react';

import { Container, ListValuesTitleWrapper, ListValuesTitle } from './styles';

interface Props {
  children?: React.ReactNode;
  title?: string;
  type?: 'primary' | 'secondary';
  className?: string;
  loadChildren?(): React.ReactNode | Promise<React.ReactNode>;
}

const Accordion: React.FC<Props> = ({
  title = '',
  className = '',
  type = 'primary',
  children,
  loadChildren,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalChildren, setInternalChildren] = useState<React.ReactNode>(
    <></>,
  );

  const toggleAccordion = useCallback(() => {
    setInternalOpen(!internalOpen);
  }, [internalOpen]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (typeof loadChildren === 'function') {
        const content = await loadChildren();
        setInternalChildren(content);
        return;
      }
      setInternalChildren(children || <></>);
    };
    if (!internalOpen) {
      setInternalChildren(<></>);
      return;
    }

    load();
  }, [internalOpen, children, loadChildren]);

  return (
    <Container open={internalOpen} type={type} className={className}>
      <ListValuesTitleWrapper
        onClick={toggleAccordion}
        className="_listWrapperContainer"
      >
        <ListValuesTitle open={internalOpen} type={type}>
          <h3>{title}</h3>
        </ListValuesTitle>
      </ListValuesTitleWrapper>
      {internalOpen && <>{internalChildren}</>}
    </Container>
  );
};

export default Accordion;
