import styled from 'styled-components';

export const FooterHead = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 75px;

  @media screen and (max-width: 580px) {
    height: auto;
  }
`;

export const FmcLogo = styled.div`
  position: absolute;
  left: 1.5em;
  width: 150px;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 580px) {
    position: relative;
    left: inherit;
    margin: 0.5em;
  }
`;

export const Copyright = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  color: ${({ theme }) => theme.font.color.primary};
`;
