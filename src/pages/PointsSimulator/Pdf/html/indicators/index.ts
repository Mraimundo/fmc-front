import { Indicator } from 'state/modules/points-simulator/interfaces';
import title from './title';
import revenuesPog from './revenues-pog';
import products from './products';
import warn from './warn';

interface Props {
  revenues: Indicator;
  pog: Indicator;
  premio: Indicator;
  hero: Indicator;
  talisman: Indicator;
}

export default (props: Props) => {
  const { revenues, pog, premio, hero, talisman } = props;

  return `
  ${title}

  ${revenuesPog({ revenues, pog })}

  ${products({ premio, hero, talisman })}

  ${warn}
`;
};
