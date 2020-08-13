import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 14px;
  align-items: center;

  > button {
    margin-left: 20px;
    width: 137px;
    height: 36px;
  }

  ._inputContainer {
    height: 52px;
    textarea {
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;

    > button {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    button {
      background: transparent;
      text-decoration: underline;
      border: none;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 0;
      color: ${({ theme }) => theme.font.color.quartenary};
      font-size: 14px;
    }

    input {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
