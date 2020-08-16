import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2em;
`;

export const WrapperInformations = styled.div`
  margin-left: 1em;

  span {
    display: block;
  }
`;

export const Hello = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
`;

export const Points = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

export const EstablishmentRtc = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
`;
