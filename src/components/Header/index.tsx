import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCoinQuotation, fetchMenu } from 'state/modules/header/actions';
import { getCoinQuotations, getMenu } from 'state/modules/header/selectors';
import { getParticipantBadgeByPortugueseTerm } from 'state/modules/header/utils';
import { useAuth } from 'context/AuthContext';
import CoinQuotation from './CoinQuotation';
import Menu from './Menu';
import HelpBalloon from './HelpBalloon';
import ParticipantBadge from './ParticipantBadge';
import Participant from './Participant';
import { Nav, ParticipantWrapper } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { participant, signOut } = useAuth();

  const [coinQuotations, menu] = [
    useSelector(getCoinQuotations),
    useSelector(getMenu),
  ];

  useEffect(() => {
    dispatch(fetchCoinQuotation());
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <Nav>
      {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      {!!menu && <Menu items={menu} />}
      <ParticipantWrapper>
        <HelpBalloon />
        {!!participant?.establishment?.category && (
          <ParticipantBadge
            badge={getParticipantBadgeByPortugueseTerm(
              participant.establishment.category,
            )}
          />
        )}
        <Participant
          name={participant.nick_name}
          picture={participant.picture}
          establishment={participant?.establishment?.name || ''}
          points={320}
          signOut={signOut}
        />
      </ParticipantWrapper>
    </Nav>
  );
};

export default Header;
