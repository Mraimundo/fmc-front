import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

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
`;

export const ViewActions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled(DefaultButton)`
  max-width: 232px;
  height: 48px;
`;
