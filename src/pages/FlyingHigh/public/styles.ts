import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #cdc5c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 5rem 0;
  font-family: ${FONTS.medium};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  width: 80%;
  color: #65554d;
  padding: 2rem 0;
  background: rgb(230, 225, 224);
  background: linear-gradient(
    47deg,
    rgba(230, 225, 224, 1) 0%,
    rgba(206, 194, 194, 1) 56%
  );
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
  }
`;

export const PromoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 60%;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
`;
