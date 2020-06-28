import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TooltipMaterial from '@material-ui/core/Tooltip';

import { Container, ContentTooltip } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  type: 'success' | 'error' | 'info';
}

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: 'transparent',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: 'none',
  },
}))(TooltipMaterial);

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className,
  type,
}) => (
  <Container className={className}>
    <HtmlTooltip
      enterTouchDelay={0}
      title={<ContentTooltip type={type}>{title}</ContentTooltip>}
    >
      <span>{children}</span>
    </HtmlTooltip>
  </Container>
);

export default Tooltip;
