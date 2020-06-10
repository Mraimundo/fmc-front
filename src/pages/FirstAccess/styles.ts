import styled from 'styled-components';
import { Avatar as DefaultAvatar } from 'components/shared';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(4, 36, 44, 1) 0%,
    rgba(56, 77, 85, 1) 100%
  );

  > img {
    width: 260px;
    margin-top: 15px;
  }
`;

export const Content = styled(animated.div)`
  width: 720px;
  background: #fff;
  padding: 20px 30px;
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

export const Avatar = styled(DefaultAvatar)`
  margin-top: 15px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 24px;
  font-weight: bold;
`;

export const Info = styled.div``;
export const BoxPhone = styled.div``;
export const Separator = styled.div``;
