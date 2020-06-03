import styled from 'styled-components';
import { animated } from 'react-spring';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 20px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.link.fontColor};
      display: block;
      margin-top: 24px;

      transition: color 0.2s;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.link.fontColor)};
      }
    }
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};
