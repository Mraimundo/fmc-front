import React from 'react';
import { ReactSVG } from 'react-svg';

import land from 'assets/images/badges/land-badge.svg';
import root from 'assets/images/badges/root-badge.svg';
import seed from 'assets/images/badges/seed-badge.svg';
import water from 'assets/images/badges/water-badge.svg';
import { Badge } from 'state/modules/header/constants';
import { BadgeSquare } from './style';

const badgeMap = {
  [Badge.Land]: <ReactSVG src={land} data-testid="badge-land" />,
  [Badge.Root]: <ReactSVG src={root} data-testid="badge-root" />,
  [Badge.Seed]: <ReactSVG src={seed} data-testid="badge-seed" />,
  [Badge.Water]: <ReactSVG src={water} data-testid="badge-water" />,
};

interface ParticipantBadgeProps {
  badge: Badge;
}
const ParticipantBadge: React.FC<ParticipantBadgeProps> = ({ badge }) => {
  return <BadgeSquare>{badgeMap[badge]}</BadgeSquare>;
};

export default ParticipantBadge;
