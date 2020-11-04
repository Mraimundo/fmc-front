import styled from 'styled-components';
import { animated } from 'react-spring';
import background from 'assets/images/background.svg';
import backgroundHeader from 'assets/images/background-header.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${background});
  background-size: cover;
  min-height: 100vh;
`;

export const Content = styled(animated.div)`
  width: 100%;
  max-width: 997px;
  background: #fff;
  padding: 20px 30px;
  min-height: calc(100vh - 161px);

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

export const RegulationContent = styled.div`
  max-height: calc(100% - 161px);
`;

export const RegulationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background});

  ${RegulationContent} {
    max-width: 1100px;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundHeader});
  > img {
    width: 364px;
  }

  @media screen and (max-width: 500px) {
    > img {
      width: 280px;
    }
  }
`;
