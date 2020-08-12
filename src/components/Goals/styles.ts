import styled from 'styled-components';

export const TitleSection = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

export const LastUpdate = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  color: #000;
  margin-top: 2.5em;
  font-size: 0.8em;
`;
