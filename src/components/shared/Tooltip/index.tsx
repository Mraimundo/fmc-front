import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TooltipMaterial from '@material-ui/core/Tooltip';

import { Container, ContentTooltip } from './styles';

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
}) => {
  const styledTheme = useContext(ThemeContext);

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: styledTheme.tooltip[type].backgroundColor,
      fontSize: theme.typography.pxToRem(12),
      border: 'none',
    },
  }))(TooltipMaterial);
  return (
    <Container className={className}>
      <HtmlTooltip
        enterTouchDelay={0}
        title={<ContentTooltip type={type}>{title}</ContentTooltip>}
      >
        <span>{children}</span>
      </HtmlTooltip>
    </Container>
  );
};

export default Tooltip;
