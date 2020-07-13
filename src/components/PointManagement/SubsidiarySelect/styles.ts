import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Input = styled.input`
  border: 1.2px solid #707070;
  border-radius: 0;
  width: 100%;
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
  max-height: 250px;
  overflow: auto;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #808285;

    li {
      min-height: 35px;
      display: flex;
      align-items: center;
    }
  }
`;
