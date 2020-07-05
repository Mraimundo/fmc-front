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
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin: 35px 0 20px 25px;
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
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 15px;
  }
`;

export const TicketsGrid = styled(DefaultTicketsGrid)`
  padding: 20px;
`;

export const Form = styled(DefaultForm)`
  max-width: 500px;

  > button {
    width: 200px;
    height: 45px;
    align-self: center;
  }
`;
