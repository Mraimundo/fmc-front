import styled from 'styled-components';
import {
  Avatar as DefaultAvatar,
  Input as DefaultInput,
} from 'components/shared';
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
    margin: 15px 0;
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
  margin-bottom: 5px;
  button {
    height: 35px;
    margin-top: 0;
    font-size: 14px;
    font-weight: bold;
    @media screen and (min-width: 1367px) {
      height: 40px;
      font-size: 16px;
    }
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 18px;
  font-weight: bold;
  strong {
    font-weight: bolder;
  }
  @media screen and (min-width: 1367px) {
    font-size: 24px;
  }
`;

export const Info = styled.div`
  margin-top: 15px;

  span {
    color: ${({ theme }) => theme.font.color.secondary};
    font-size: 14px;
  }

  p {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 10px;
  max-width: 350px;

  @media screen and (max-width: 1368px) {
    ._inputContainer {
      height: 40px;
    }
  }
`;

export const BoxPhone = styled.div``;
export const Separator = styled.div``;
