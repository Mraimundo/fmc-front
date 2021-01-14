import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

export const Container = styled.div`
  width: 100%;

  .content-bainer {
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    height: 463px;
  }

  .content-bainer div:nth-child(1) .title {
    width: 260px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 24px;
    font-weight: 28px;
    color: #2a4207;
  }

  .content-bainer div:nth-child(1) .sub-title {
    width: 427px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: 21px;
    color: #2a4207;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bainer-info {
    display: flex;
  }

  .bainer-info__children .bainer-guidance {
    display: flex;
    flex-direction: column;
  }

  .bainer-info__children h3 {
    width: 380px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #fff;

    margin-left: 60px;
  }

  .bainer-guidance h4 {
    width: 283px;
    font-family: 'Helvetica Neue', sans-serif;
    color: #fff;
    font-size: 16px;
    font-style: italic;
    font-weight: 18px;
    margin-bottom: 16px;
    margin-left: 60px;
  }

  .indicator-code {
    margin-top: 25px;
    margin-left: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .indicator-code {
    width: 419px;
    height: 160px;
    background: #fff;
    padding: 0 25px;
  }
  .indicator-code div:nth-child(1) h1 {
    width: 276px;
    font-size: 16px;
    font-weight: 18px;
    color: #2a4207;
  }

  .indicator-code div:nth-child(2) .register-group h2 {
    width: 332px;
    font-size: 14px;
    color: #2a4207;
  }

  .indicator-code div:nth-child(2) .register-group span {
    width: 248px;
    font-size: 14px;
    font-weight: 16px;
    color: #2a4207;
    margin-bottom: 18px;
  }

  .indicator-code div:nth-child(2) button {
    width: 367px;
    height: 36px;
    background: #2a4207;
    color: #fff;
    font-size: 16px;
    margin-top: 18px;
    border: none;
  }
`;
