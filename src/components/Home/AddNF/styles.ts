import styled, { css } from 'styled-components';

import background from 'assets/images/fmcProdutor/addNF-bg.png';
import backgroundMobile from 'assets/images/fmcProdutor/addNF-bg--mobile.png';

export const Container = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 10px;
  background-size: 100% auto;
  background-position: center;

  background: linear-gradient(
    rgba(101, 85, 77, 0.17) 0%,
    rgba(255, 255, 255, 0.18) 47.78%,
    rgba(101, 85, 77, 0.09) 100%
  );
  color: ${({ theme }) => theme.font.color.primary};
`;


interface ContentProps {
  secondary?: boolean;
}


export const Content = styled.div<ContentProps>`
  position: relative;

  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  border-radius: 10px;
  padding: 24px;
  @media (min-width: 768px) {
    padding: 50px 24px;
  }
  a {
    text-decoration: none;
    color: #181818;
  }


 

  @media (max-width: 767px) {
    > * {
      margin-top: 20px;
    }

    &::before {
      content: '';
      width: 100%;
      height: 145px;
      display: block;
      margin: 0 auto 16px auto;
      background-image: url(${backgroundMobile});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }

  @media (min-width: 768px) {
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 97% auto;
    padding-left: 33%;
  }

  @media (min-width: 1024px) {
    display: flex;
    padding-left: 25%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    ${({ secondary }) =>
    secondary &&
        css`
          flex-flow: row wrap;
    `}
  }

  ${({ secondary }) =>
  secondary &&
      css`
        h3 {
          margin: 0 0 20px 0;
        }
        > p {
          width: 50%;
          padding-right: 2em;
        }
  `}

`;
export const StyledStatusTable = styled.div`
  padding: 12px 22px;
  border-radius: 10px;
  background: #f4f4f3;
  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  margin-top: 10px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.font.fontFamily.condensed};

  @media (min-width: 1024px) {
    margin: auto 20px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const RightSideBox = styled.div`
  margin-top: 16px;

  > div {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-flow: row nowrap;
  }
`;
