import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  type: 'success' | 'error' | 'info';
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className,
  type,
}) => (
  <Container className={className} type={type}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
