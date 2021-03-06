import styled from 'styled-components';
import {
  TicketsGrid as DefaultTicketsGrid,
  Form as DefaultForm,
} from 'components/Contact/Connected';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 25px;
    font-size: 24px;
  }

  > button {
    width: 250px;
    margin: 25px 0;
    align-self: center;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;

export const BoxTickets = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
  margin-top: 35px;
  > h3 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 15px;
  }

  @media screen and (max-width: 720px) {
    padding: 0;

    > h3 {
      margin: 35px 0 20px 20px;
    }
  }
`;

export const TicketsGrid = styled(DefaultTicketsGrid)`
  padding: 20px;

  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;

export const Form = styled(DefaultForm)`
  max-width: 435px;

  > button {
    width: 137px;
    height: 36px;
    align-self: center;
  }
`;
