import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  grid-column-gap: 20px;
  align-items: center;
  margin-top: 10px;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
    color: #2c2b2b;
  }

  ._inputContainer {
    max-width: 291px;
    height: 42px;
    margin-left: 25px;
  }
`;
