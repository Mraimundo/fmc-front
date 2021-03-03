import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 250px;
  background: rgb(230, 225, 224);
  background: linear-gradient(
    90deg,
    rgba(230, 225, 224, 1) 32%,
    rgba(206, 197, 194, 1) 100%
  );
  border-radius: 1rem;
`;

export const BannerWrapper = styled.div`
  width: 60%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  /*text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }*/
`;

export const LuckyNumberWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  /*@media (max-width: 1250px) {
    width: 30%;
  }*/
`;

export const LuckyNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  width: 50%;
  background-color: #ffffff;
  border-radius: 0.25rem;
  color: #3b302a;
  font-family: ${FONTS.medium};
  margin-top: 1rem;

  p {
    font-size: 0.8em;
  }
`;

export const UpperEllipse = styled.div`
  height: 90px;
  width: 45px;
  border-radius: 150px 0 0 150px;
  border: 10px solid #e63027;
  border-right: 0;
  position: absolute;
  right: 0;
  top: 10%;
`;

export const LowerEllipse = styled.div`
  height: 30px;
  width: 60px;
  border: 8px solid #ffffff;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom: 0;
  position: absolute;
  bottom: 0;
  left: 10%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${FONTS.medium};

  h3 {
    color: #e63027;
  }

  p {
    color: #3b302a;
    font-size: 1em;
  }
`;

export const SeeMoreWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  padding-right: 2rem;
`;

export const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  width: 100px;
  height: 50px;
  background-color: #e63027;
  border-bottom-left-radius: 110px;
  border-bottom-right-radius: 110px;
  border-top: 0;

  a {
    color: #ffffff;
    font-family: ${FONTS.medium};
  }
`;
