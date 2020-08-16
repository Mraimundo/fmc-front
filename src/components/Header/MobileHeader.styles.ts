import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { QuotationsList } from './CoinQuotation/styles';

export const EstablishmentType = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: #fff;
  font-size: 1.5em;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

interface MobileNavProps {
  open: boolean;
}
export const MobileNav = styled.nav<MobileNavProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  height: 100%;
  overflow: auto;
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 150ms ease;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.font.color.primary} 70%,
    ${({ theme }) => darken(0.05, theme.font.color.primary)}
  );

  @media screen and (max-width: 1220px) {
    ${QuotationsList} {
      width: 140px;
    }
  }
`;

export const HeaderToggleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  height: 40px;
  background: linear-gradient(
    to right,
    ${({ theme }) => darken(0.05, theme.font.color.primary)} 70%,
    ${({ theme }) => theme.font.color.primary}
  );
`;

export const ClosesMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.5em;
`;
