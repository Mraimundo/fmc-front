import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const StyledTitle = styled.h1`
  color: #193b4e;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
  font-family: ${FONTS.bold};
  ${({ center }: { center: boolean }) => center && `text-align: center;`};
`;
