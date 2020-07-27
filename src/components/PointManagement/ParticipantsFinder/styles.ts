import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Input = styled.input`
  border: 1.2px solid #707070;
  border-radius: 0;
  height: 60px;
  outline: none;
  padding: 5px 10px;
  color: #707070;
  margin-top: 5px;
  width: 280px;
  font-family: ${FONTS.medium};
`;

export const Wrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    height: 35px;
    width: 35px;
    transform: translateY(-17.5px);
  }
`;

export const LabelWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100%;

    ${Input} {
      width: 100%;
    }
  }
`;
