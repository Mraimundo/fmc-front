import React, { useEffect, useState } from 'react';

import { getNameAbbr } from 'util/string';
import { AvatarCircle, AvatarInitialsName } from './styles';

type Props = {
  name: string;
  picture?: string | null;
  circleDimension?: number;
};
const Avatar: React.FC<Props> = ({ name, picture, circleDimension = 50 }) => {
  const [hasPicture, setHasPicture] = useState(true);

  useEffect(() => {
    setHasPicture(!!picture);
  }, [picture]);

  if (!hasPicture || !picture) {
    const nameInitials = getNameAbbr(name);

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
      onError={() => setHasPicture(false)}
    />
  );
};

export default Avatar;
