import styled from 'styled-components';

interface StyledTitleProps {
  reverse: boolean;
}
export const StyledTitle = styled.h1<StyledTitleProps>`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ reverse, theme }) =>
    reverse ? '#fff' : theme.font.color.primary};
  font-size: 1.3em;
  margin: 0.5em 0;
`;
