import { Indicator, Award } from 'state/modules/points-simulator/interfaces';
import simulatedSale from './simulated-sale';
import simulatedPoints from './simulated-points';
import totalPoints from './total-points';

interface Props {
  revenues: Indicator;
  pog: Indicator;
  award: Award;
}

export default (props: Props) => {
  const { revenues, pog, award } = props;

  return `
  ${simulatedSale({ revenues, pog })}
  ${simulatedPoints({ award })}
  ${totalPoints({ award })}
`;
};
