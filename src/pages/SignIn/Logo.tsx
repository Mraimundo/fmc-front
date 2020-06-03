import React from 'react';
import { useSpring, animated } from 'react-spring';

import logoImg from 'assets/images/logo.png';
import { logoAnimation } from './styles';

const Logo: React.FC = () => {
  const logoProps = useSpring(logoAnimation);

  return <animated.img src={logoImg} alt="Logo FMC" style={logoProps} />;
};

export default Logo;
