import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

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
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      margin-top: 26px;
    }

    > div {
      & + div {
        margin-top: 12px;
      }
    }
  }

  @media screen and (max-width: 720px) {
    padding: 60px 20px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 22px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  margin-bottom: 18px;
`;

export const Modal = styled(DefaultModal)`
  @media screen and (max-width: 720px) {
    ._modalContainer {
      width: 98%;
      padding-right: 0;
    }
  }
`;
