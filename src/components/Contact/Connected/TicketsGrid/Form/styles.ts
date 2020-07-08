import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px;
  align-items: center;

  > button {
    margin-left: 20px;
    width: 200px;
    height: 45px;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    button {
      background: transparent;
      text-decoration: none;
      border: none;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 0;
      color: ${({ theme }) => theme.font.color.primary};
      font-size: 10px;
    }

    input {
      display: none;
    }
  }
`;
