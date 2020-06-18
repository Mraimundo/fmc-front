import styled from 'styled-components';
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

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

export const RegulationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    90deg,
    rgba(4, 36, 44, 1) 0%,
    rgba(56, 77, 85, 1) 100%
  );

  > img {
    width: 240px;
    margin-top: 20px;
  }

  > div {
    max-width: 800px;
  }

  button {
    height: 45px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const RegulationContent = styled.div`
  max-height: calc(100% - 94px);
`;
