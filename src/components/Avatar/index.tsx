import React from 'react';

import { getNameAbbr } from 'util/string';
import { AvatarCircle, AvatarInitialsName } from './styles';

type Props = {
  name: string;
  picture?: string | null;
  circleDimension?: number;
};
const Avatar: React.FC<Props> = ({ name, picture, circleDimension = 50 }) => {
  const nameInitials = getNameAbbr(name);

  if (!picture) {
    return (
      <AvatarInitialsName circleDimension={circleDimension}>
        {nameInitials}
      </AvatarInitialsName>
    );
  }

  return (
    <AvatarCircle
      src={picture}
      alt={name}
      title={name}
      circleDimension={circleDimension}
    />
  );
};

export default Avatar;
