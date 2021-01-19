import styled from 'styled-components';
import banner from '../../assets/images/banner-02.png';

export const Container = styled.div`
  width: 100%;

  .content-bainer {
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    height: 463px;
  }

  .content-group {
    transform: translateY(34px);
  }

  .content-group .title {
    width: 260px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 24px;
    font-weight: 28px;
    color: #2A4207;
    margin-bottom: 10px;
  }

  .content-group .sub-title {
    width: 472px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 21px;
    color: #2A4207;
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
    font-family: 'Helvetica Neue', sans-serif;
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
    color: #2A4207;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .indicator-code div:nth-child(2) .register-group h2{
    font-size: 14px;
    color: #2A4207;
    align-items: center;
    margin-top: 30px;
  }

  .indicator-code div:nth-child(2) .register-group span {
    font-size: 14px;
    font-weight: 16px;
    color: #2A4207;
    margin-bottom: 18px;
  }

  .indicator-code div:nth-child(2) button {
    width:100%;
    height: 36px;
    background: #2A4207;
    color: #fff;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    margin-top: 18px;
    border: none;
  } 
`;
