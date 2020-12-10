import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  width: 100%;
  max-width: 809px;
  height: 76px;
  padding: 0 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.38);
  position: absolute;
  z-index: 10;
  bottom: 0;
  border-radius: 10px 10px 0 0;

  > div {
    display: flex;
    align-items: center;

    > span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 14px;
      color: ${({ theme }) => theme.font.color.primary};

      & + span {
        font-family: ${({ theme }) => theme.font.fontFamily.regular};
        margin-left: 36px;
      }
    }

    > input[type='text'] {
      width: 76px;
      height: 33px;
      border-radius: 5px;
      background: #808285;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 8px;
      border: none;
      padding: 0 10px;
      color: white;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export const Button = styled(DefaultButton)`
  width: 102px;
  height: 33px;
  border-radius: 5px;
  /*background: #b5b3b2;*/
  font-size: 14px;
  margin-top: 0;
  margin-left: 12px;
`;
