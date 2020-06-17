import styled from 'styled-components';
import ContactBallon from 'components/Contact';
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
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

export const Contact = styled(ContactBallon)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ForgotPasswordButton = styled.button`
  color: ${({ theme }) => theme.link.fontColor};
  display: block;
  margin-top: 24px;
  border: none;
  background: transparent;

  transition: color 0.2s;
  will-change: color;
  &:hover {
    color: ${({ theme }) => shade(0.2, theme.link.fontColor)};
  }
`;
