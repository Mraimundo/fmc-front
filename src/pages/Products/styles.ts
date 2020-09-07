import styled from 'styled-components';
import background from 'assets/images/products/background.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #f7f7f7;
  padding: 40px 60px;
`;

export const Header = styled.div`
  > ${Content} {
    background: transparent;
    position: relative;

    > h3 {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 24px;
      color: ${({ theme }) => theme.font.color.primary};
    }

    > span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 18px;
      color: ${({ theme }) => theme.font.color.primary};
      margin-top: 6px;
    }
  }

  display: flex;
  width: 100%;
  height: 449px;
  background: url(${background}) no-repeat center center;
  justify-content: center;
`;
