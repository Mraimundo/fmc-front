import styled from 'styled-components';

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
  padding: 40px 60px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
  margin-top: 3px;
`;
