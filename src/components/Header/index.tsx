import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCoinQuotation, fetchMenu } from 'state/modules/header/actions';
import { getCoinQuotations } from 'state/modules/header/selectors';
import { getParticipantBadgeByPortugueseTerm } from 'state/modules/header/utils';
import useMenu from 'state/hooks/use-menu';
import { useAuth } from 'context/AuthContext';
import CoinQuotation from './CoinQuotation';
import Menu from './Menu';
import HelpBalloon from './HelpBalloon';
import ParticipantBadge from './ParticipantBadge';
import Participant from './Participant';
import { Nav, ParticipantWrapper } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { participant, signOut, simulating } = useAuth();
  const { selectedMenu, menu } = useMenu();

  const coinQuotations = useSelector(getCoinQuotations);

  useEffect(() => {
    dispatch(fetchCoinQuotation());
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <Nav>
      {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      {!!menu && <Menu items={menu} selectedMenu={selectedMenu} />}
      <ParticipantWrapper>
        <HelpBalloon />
        {participant.profile !== 'FMC' &&
          !!participant?.establishment?.category && (
            <ParticipantBadge
              badge={getParticipantBadgeByPortugueseTerm(
                participant.establishment.category,
              )}
            />
          )}
        <Participant
          name={participant.nick_name}
          picture={participant.picture}
          establishment={
            /* participant.profile === 'FMC' ? null : participant.establishment */
            null
          }
          profile={participant.profile}
          points={
            participant.establishment.team_receives_points ? 0 : undefined
          }
          signOut={signOut}
          simulating={simulating}
          participant={participant}
        />
      </ParticipantWrapper>
    </Nav>
  );
};

export default Header;
