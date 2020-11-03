import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
  min-height: calc(100vh - 380px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1030px;
  display: flex;
  flex-direction: column;
`;

export const CustomTableBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
`;

export const Box = styled.div`
  max-height: calc(100vh - 557px);
  width: 100%;
  overflow: auto;
  padding-bottom: 63px;
  margin-top: 15px;
`;
