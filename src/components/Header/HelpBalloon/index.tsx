import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import routeMap from 'routes/route-map';
import helpBalloonIcon from 'assets/images/help-balloon.svg';
import interrogationIcon from 'assets/images/interrogation-icon.svg';
import phoneIcon from 'assets/images/phone-icon.svg';

import { HelpBallonWrapper, HelpMenu } from './styles';

const HelpBalloon: React.FC = () => {
  return (
    <HelpBallonWrapper data-testid="help-balloon">
      <ReactSVG src={helpBalloonIcon} />
      <HelpMenu data-testid="help-balloon-manu">
        <li>
          <ReactSVG src={interrogationIcon} />
          <Link to={routeMap.faq}>FAQ</Link>
        </li>
        <li>
          <ReactSVG src={phoneIcon} />
          <Link to={routeMap.contact}>Fale conosco</Link>
        </li>
      </HelpMenu>
    </HelpBallonWrapper>
  );
};

export default HelpBalloon;
