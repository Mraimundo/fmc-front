import styled from 'styled-components';

export const FooterHead = styled.div`
  position: relative;
  background-color: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;

export const FmcLogo = styled.div`
  position: absolute;
  left: 1.5em;
  width: 150px;

  svg {
    width: 100%;
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
