import styled from 'styled-components';
import { FONTS } from '../../../styles/font/globals';

import minibanner from '../../../assets/images/mini-banner.svg';

export const Container = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 21px;
    }
`;

export const Cover = styled.div`
  .content-bainer {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${minibanner});
    height: 350px;
    object-fit: cover;
    filter: brightness(1);
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: filter 150ms ease;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 256px;
      margin-bottom: 15px;
    }
    
    @media screen and (max-width: 480px) {
    width: 100%;
    }

    @media screen and (max-width: 320px) {
      height: 256px;
    }

    main{
    padding: 0 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    transform: translateY(107px);
    
    @media screen and (max-width: 767px) {
      flex-direction: column;
      transform: translateY(59px);
      img {
        display: none;
      }
    }

    @media screen and (max-width: 320px) {
      transform: translateY(59px);
    }



      .indicator-code {
        width: 100%;
        max-width: 378px;
        height: 171px;
        background: #fff;
        padding: 15px 0;

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

          @media screen and (max-width: 767px) {
            margin-top: 0px;
          }

          @media screen and (max-width: 320px) {
            margin-top: 0px;
          }
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

          &:hover {
            filter: brightness(0.7);
        }
        }

        @media screen and (max-width: 767px) {
          height: 181px;
        }
       
      }
    }
  }
`;

export const Title = styled.h1`
  transform: translateY(53px);
  font-family: ${FONTS.bold};
  font-size: 21px;
  font-weight: 28px;
  color: ${({ theme }) => theme.font.color.primary};
  padding: 0 25px;


`;





