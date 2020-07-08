import styled from 'styled-components';

export const Input = styled.input`
  border: 1.5px solid #808285;
  border-radius: 0;
  width: 100%;
  height: 60px;
  outline: none;
  padding: 5px 10px;
  color: #808285;
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
