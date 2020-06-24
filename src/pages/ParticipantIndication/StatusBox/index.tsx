import React, { useRef, useEffect } from 'react';
import iconEmpty from 'assets/images/indication/status-empty.svg';
import iconFilled from 'assets/images/indication/status-filled.svg';
import { Rating } from '@material-ui/lab';

import { Container, AddButton, StatusIndicator } from './styles';

interface Props {
  percentActivated: number;
  onAddClick(): void;
  opened?: boolean;
}

const StatusBox: React.FC<Props> = ({
  percentActivated,
  onAddClick,
  opened = false,
}) => {
  const statusRef = useRef<HTMLDivElement>(null);
  const [inactivated, setInactivated] = React.useState<number[]>([]);
  const [activated, setActivated] = React.useState<number[]>([]);

  React.useEffect(() => {
    const availableWidth = statusRef.current?.offsetWidth || 0;
    const availableSpots = Math.ceil(availableWidth / 21);

    const active = Math.ceil((availableSpots * percentActivated) / 100);
    const inactive = availableSpots - active;

    setInactivated(Array.from({ length: inactive }, (v, k) => k + 1));
    setActivated(Array.from({ length: active }, (v, k) => k + 1));
  }, [statusRef, percentActivated]);

  return (
    <Container>
      <h3>Equipe ativa no sistema</h3>
      <StatusIndicator ref={statusRef} percentActivated={percentActivated}>
        <>
          {activated.map((item, key) => (
            <span
              key={`activated-${item}`}
              className={key + 1 === activated.length ? '_last' : ''}
            >
              <img src={iconFilled} alt="Icone preenchido" />
            </span>
          ))}
          {inactivated.map(item => (
            <span key={`inactivated-${item}`}>
              <img src={iconEmpty} alt="Icone vazio" />
            </span>
          ))}
        </>
      </StatusIndicator>
      <AddButton type="button" onClick={onAddClick} opened={opened} />
    </Container>
  );
};

export default StatusBox;
