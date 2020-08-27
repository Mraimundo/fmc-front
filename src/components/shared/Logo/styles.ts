import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95px;

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const Content = styled.div`
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: #fff;

  > a {
    display: flex;
    align-items: center;
  }

  > div svg {
    /*margin-top: 1.5em;*/
  }

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const FmcLogoWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    svg {
      width: 200px;
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 480px) {
    svg {
      width: 150px;
    }
  }
`;
