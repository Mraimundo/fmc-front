import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    color: #34ffff;
  }

  ._inputContainer {
    height: 42px;
    min-width: 220px;
    border-color: #34ffff;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    grid-column-gap: 0;
    width: 100%;
    margin-top: 10px;
  }
`;
