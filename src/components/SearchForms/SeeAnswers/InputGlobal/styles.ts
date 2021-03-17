import styled, { css } from 'styled-components';


interface InputType {
  inputType: string;
}

export const Container = styled.div<InputType>`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

    p {
      font-size: 14px;
      color: #000;
      margin-bottom: 25px;
    }

    input {
      width: 174px;
      height: 40px;
      color: #3B302A;
      padding: 0 10px;

      ${(props) => props.inputType === 'text' && css`
      width: 300px;
    `}

    }    
`;





