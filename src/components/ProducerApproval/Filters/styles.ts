import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 2rem 0 0;
  padding: 0 1rem 0;

  *:not(:last-child) {
    padding-right: 1rem;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Button = styled(DefaultButton)`
  margin-top: 0;
  min-height: 50px;
  width: 200px;

  @media screen and (max-width: 720px) {
    width: 70%;
    margin: 1rem 0 0 0;
  }
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.2em;
  color: ${({ theme }) => theme.font.color.primary};
  margin-bottom: 1rem;
`;

export const FiltersBox = styled.div`
  display: flex;
  width: 100%;

  button:nth-child(3) {
    margin-left: 15px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    button:nth-child(3) {
      margin-left: 0;
    }
  }
`;
