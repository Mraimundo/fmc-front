import styled, { css } from 'styled-components';
import bannerVerde from '../../assets/images/banner-verde.png';
import bannerAzul from '../../assets/images/banner-azul.png';
import bannerMarron from '../../assets/images/banner-marron.png';
import bannerCinza from '../../assets/images/banner-cinza.png';

interface ColorProps {
  colorType: string;
}


export const Container = styled.div<ColorProps>`
  width: 100%;

  .content-bainer {
    background-repeat: no-repeat;
    background-position: center;
    height: 463px;

    ${(props) => props.colorType === 'verde' && css`
      background-image: url(${bannerVerde});
    `}
    ${(props) => props.colorType === 'azul' && css`
      background-image: url(${bannerAzul});
    `}
    ${(props) => props.colorType === 'marron' && css`
      background-image: url(${bannerMarron});
    `}
    ${(props) => props.colorType === 'cinza' && css`
      background-image: url(${bannerCinza});
    `}
  }

  .content-group {
    transform: translateY(34px);
  }

  .content-group .title {
    width: 260px;
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 24px;
    font-weight: 28px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 10px;
  }

  .content-group .sub-title {
    width: 472px;
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 18px;
    font-weight: 21px;
    color: ${({ theme }) => theme.font.color.primary};;
  }

  main{
    width: 100%;
    display: flex; 
    justify-content: space-between;
    margin-top:160px;
    padding:0 150px 0 120px;
  } 

  .bainer-guidance {
    display: flex; 
    align-items: flex-start;
    margin-bottom: 16px;
  } 

  
  .bainer-info__children {
    margin-top: 24px;
  }

  .bainer-info__children h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};  
    font-size: 18px;
    color: #fff;
    margin-left: 25px;
  }

  .bainer-guidance h4 {
    width: 283px;
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    color: #fff;
    font-size: 16px;
    font-style: italic;
    font-weight: 18px;
    margin-left: 8px;
  }

  .indicator-code {
    position:  relative;
    width: 380px;
    height: 160px;
    background: #fff;
    padding: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .color-content {
    position: absolute;
    background-color: #C5CFD4; 
    width: 380px;
    height: 12px;
    bottom: 0;
    right: 0 ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

  }
  .indicator-code div:nth-child(1) h1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 380px; 
    height: 30px;
    padding: 10px 10px;
    text-align: center;
    background-color: #C5CFD4; 
    font-size: 16px;
    font-weight: 18px;
    color: ${({ theme }) => theme.font.color.primary};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .indicator-code div:nth-child(2) .register-group h2{
    font-size: 14px;
    color: ${({ theme }) => theme.font.color.primary};
    align-items: center;
    margin-top: 25px;
  }

  .indicator-code div:nth-child(2) .register-group span {
    font-size: 14px;
    font-weight: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 18px;
  }

  .indicator-code div:nth-child(2) button {
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

  .indicator-code div:nth-child(2) button:hover {
    opacity: 0.9;
    color: #fff;
  }
`;
