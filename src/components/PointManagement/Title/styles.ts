import styled from 'styled-components';

interface StyledTitle {
  center: boolean;
}
export const StyledTitle = styled.h1<StyledTitle>`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
  ${({ center }) => center && `text-align: center;`};
`;
