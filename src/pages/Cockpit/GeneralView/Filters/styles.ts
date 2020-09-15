import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-column-gap: 35px;
  align-items: center;
  margin-top: 10px;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
    color: #2c2b2b;
  }

  ._inputContainer {
    height: 42px;
  }
`;
