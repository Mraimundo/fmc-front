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
  min-height: 350px;
`;

export const Box = styled.div`
  max-height: calc(100vh - 557px);
  min-height: 350px;
  width: 100%;
  margin-bottom: 71px;
  margin-top: 15px;
  overflow-y: hidden;
`;

export const WarningBox = styled.span`
  padding: 1em 1em;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 14px;
  background-color: #808285;
  border-radius: 0.5rem;
`;
