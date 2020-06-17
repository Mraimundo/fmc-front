import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 60px 100px;

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    ._inputContainer {
      height: 42px;
    }

    > button {
      width: 160px;
      height: 40px;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 26px;
    }

    > div {
      & + div {
        margin-top: 12px;
      }
    }
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
`;
