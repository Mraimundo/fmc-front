import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';
import ContactBallon from 'components/Contact';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #cdc5c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${FONTS.medium};
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  width: 80%;
  color: #65554d;
  padding: 2rem 0 0 0;
  background: rgb(230, 225, 224);
  background: linear-gradient(
    40deg,
    rgba(230, 225, 224, 1) 0%,
    rgba(206, 194, 194, 1) 85%
  );

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 2rem 1rem;
  letter-spacing: 0.1em;
`;

export const FooterWrapper = styled.div`
  background-color: #efefef;
  width: 80%;
  footer {
    width: 100%;
    div:nth-child(2) {
      background-color: #65554d;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const PromoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  padding-bottom: 2rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 40%;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const UpperEllipse = styled.div`
  height: 150px;
  width: 75px;
  border-radius: 150px 0 0 150px;
  border: 12px solid #e63027;
  border-right: 0;
  position: absolute;
  right: 0;
  top: 20%;

  @media (max-width: 600px) {
    top: 0;
  }
`;

export const LowerEllipse = styled.div`
  height: 35px;
  width: 70px;
  border: 10px solid #e63027;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  border-bottom: 0;
  position: absolute;
  bottom: 0;
  right: 20%;
`;

export const Contact = styled(ContactBallon)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
