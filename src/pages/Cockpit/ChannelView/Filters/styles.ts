import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  > button {
    width: 111px;
    height: 40px;
    border-radius: 4px;
    background: #717070;
    border: none;
    opacity: 0.6;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    color: #fff;
  }
`;

interface FieldsProps {
  opened: boolean;
}

export const Fields = styled.div<FieldsProps>`
  display: flex;
  flex-direction: column;
  /*margin: 18px 0;*/
  overflow: hidden;
  width: 100%;
  padding: 0 18px;
  max-height: 0;

  transition: max-height 0.4s ease;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
    color: #2c2b2b;
    margin-bottom: 7px;

    & + span {
      margin-bottom: 12px;
    }
  }

  ${({ opened }) =>
    opened &&
    css`
      max-height: 250px;
      margin-bottom: 20px;
    `}

  ._inputContainer {
    width: 291px;
    height: 42px;
    background: #fff;
    border: 1px solid #717070; /*MAYCONN retirar depois do book de estilos*/

    input {
      color: #717070;
    }
  }

  > div + div {
    margin-top: 10px;
  }
`;
