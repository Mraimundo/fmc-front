import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 15px;
    background-color ${({ theme }) => theme.font.color.primary};
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media screen and (max-width: 480px) {
    &:before {
      display: none;
    }
  }
`;

export const Title = styled.h4`
  padding: 0.4em;
  position: absolute;
  width: 350px;
  text-align: center;
  background-color: ${({ theme }) => theme.font.color.primary};
  border-radius: 23px;
  right: 50%;
  transform: translateX(175px);
  font-family: ${FONTS.medium};

  @media screen and (max-width: 480px) {
    width: 100%;
    right: 0;
    left: 0;
    transform: none;
    border-radius: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Input = styled.input`
  width: 350px;
  border: none;
  background-color: #fff;
  text-align: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  border-radius: 6px;
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1.4em;
  padding: 1em;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-175px);
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1607843137254902);

  @media screen and (max-width: 490px) {
    width: 200px;
    transform: translateX(-100px);
    bottom: 15px;
  }
`;
