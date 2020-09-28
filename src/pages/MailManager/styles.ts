import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  h1 {
    color: red;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 0;

  label span {
    width: 200px;
    margin-left: 20px;
    color: #303030;
    background: #ddd;
    text-align: center;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
  }

  > button {
    width: 200px;
    margin-left: 20px;
    background: #ddd;
    border: none;
    height: 45px;
    color: #303030;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
  }
`;
