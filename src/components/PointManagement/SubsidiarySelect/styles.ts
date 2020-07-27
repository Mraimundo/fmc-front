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
  font-size: 1em;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const WrapperInput = styled.div`
  position: relative;

  ${Input}, svg {
    cursor: pointer;
  }

  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    height: 25px;
    width: 25px;
    transform: translateY(-8.5px);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
  top: 82px;
  padding: 1em;
  border: 1.2px solid #707070;
  height: auto;
  max-height: 300px;
  overflow: auto;
  z-index: 1;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.58);

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #808285;

    li {
      min-height: 35px;
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
    }
  }
`;
