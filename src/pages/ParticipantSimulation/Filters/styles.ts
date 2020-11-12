import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 30px;
    margin-bottom: 10px;
  }

  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
    margin-top: 8px;
  }

  > button {
    width: 152px;
    height: 48px;
    align-self: center;
    margin: 30px 0;
    text-transform: uppercase;
    border-radius: 5px;
  }

  > input[type='text'] {
    width: 100%;
    max-width: 600px;
    height: 44px;
    margin-top: 8px;
    padding: 0 12px;

    &::placeholder {
      color: #c9cacb;
    }
  }
`;
