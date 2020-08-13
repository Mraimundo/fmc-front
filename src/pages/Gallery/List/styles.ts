import styled from 'styled-components';
import DefaultButton from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > button {
    margin: 25px 0;
    align-self: center;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    border-radius: 0;
  }

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 15px;
    font-size: 24px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;

    > h3 {
      margin-left: 0;
    }

    > button {
      width: 100%;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const Button = styled(DefaultButton)`
  width: 265px;
  height: 36px;
`;
