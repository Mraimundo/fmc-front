import styled from 'styled-components';

export const Container = styled.div``;

export const WelcomeMessageContainer = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 18px;

  p {
    margin-top: 1em;
  }
`;
