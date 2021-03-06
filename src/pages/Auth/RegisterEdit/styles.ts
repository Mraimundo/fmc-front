import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;

  > img {
    width: 260px;
    margin: 15px 0;
  }
`;

export const Content = styled(animated.div)`
  width: 720px;
  background: #fff;
  padding: 40px 30px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

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
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const RegulationContent = styled.div`
  max-height: calc(100% - 94px);
`;
