import styled from 'styled-components';
import Modal from 'components/shared/Modal';

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
  @media screen and (max-width: 720px) {
    padding: 60px 10px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
`;

export const DefaultModal = styled(Modal)`
  @media screen and (max-width: 720px) {
    ._modalContainer {
      padding: 0;
      width: 95%;
      max-width: 500px;
    }
  }
`;
