import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.primary};
  }

  > div {
    display: flex;
    align-items: center;
    > div {
      transform: translateY(2px);
    }

    > button {
      margin-left: 16px;
    }
  }
`;

export const Button = styled(DefaultButton)`
  width: 191px;
  height: 33px;
  border-radius: 5px;
  margin-top: 0;
`;
