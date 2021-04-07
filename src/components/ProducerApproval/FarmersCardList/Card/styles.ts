import styled from 'styled-components';

import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 200px;
  border: 3px dotted ${({ theme }) => theme.font.color.primary};
  border-radius: 8px;
  padding: 0.75rem;
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
  color: ${({ theme }) => theme.font.color.primary};
  margin: 1rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 1.3em;
  }

  p {
    font-size: 1em;
  }

  span {
    font-size: 0.9em;
  }

  *:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5rem;
`;

export const AvatarWrapper = styled.div`
  display: grid;
  place-items: start center;
  margin-right: 1rem;
`;

export const ImageAvatar = styled.img`
  vertical-align: text-top;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 5px;
  border: 3px solid ${({ theme }) => theme.font.color.primary};
`;

export const InitialsAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 5px;
  border: 3px solid ${({ theme }) => theme.font.color.primary};
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.9em;
`;

export const Button = styled(DefaultButton)`
  height: 25px;
  width: 100px;
  font-size: 0.9em;
  border-radius: 3px;
  color: ${({ theme }) => theme.font.color.primary};
`;
