import styled, { css } from 'styled-components';
import bannerVerde from '../../../assets/images/banner-verde.png';
import bannerAzul from '../../../assets/images/banner-azul.png';
import bannerMarron from '../../../assets/images/mini-banner.svg';
import bannerCinza from '../../../assets/images/banner-cinza.png';

interface ColorProps {
  colorType: string;
}

export const Container = styled.div<ColorProps>`
  width: 50%;
  .content-bainer {
    background-repeat: no-repeat;
    background-position: center;
    height: 360px;

    ${props =>
    props.colorType === 'verde' &&
    css`
        background-image: url(${bannerVerde});
      `}
    ${props =>
    props.colorType === 'azul' &&
    css`
        background-image: url(${bannerAzul});
      `}
    ${props =>
    props.colorType === 'marron' &&
    css`
        background-image: url(${bannerMarron});
      `}
    ${props =>
    props.colorType === 'cinza' &&
    css`
        background-image: url(${bannerCinza});
      `}

    > h1 {
      font-family: ${({ theme }) => theme.font.fontFamily.regular};
      font-size: 21px;
      font-weight: 28px;
      color: ${({ theme }) => theme.font.color.primary};
      padding: 0 25px;
    }
    main{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 87px;
    /* padding:0 25px 0 23px; */

      .indicator-code {
        width: 100%;
        max-width: 378px;
        height: 171px;
        background: #fff;
        h1 {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 18px;
        color: ${({ theme }) => theme.font.color.primary};
        padding: 0 25px;
        }

        .indicator-code-content {
          display: flex;
          flex-direction: column;
          padding: 0 25px;
        }

        .indicator-code-content div:nth-child(1) h2{
          font-size: 12px;
          color: ${({ theme }) => theme.font.color.primary};
          align-items: center;
          margin-top: 25px;
        }

        .indicator-code-content div:nth-child(1) span{
          font-size: 14px;
          font-weight: 16px;
          color: ${({ theme }) => theme.font.color.primary};
          margin-bottom: 18px;
        }

        .indicator-code-content button {
          width:100%;
          height: 36px;
          background: ${({ theme }) => theme.footer.background};
          color: #fff;
          font-family: ${({ theme }) => theme.font.fontFamily.bold};
          font-size: 16px;
          margin-top: 12px;
          border: none;
          transition: 0.5s;
        }
      }

    }
  }
`;


