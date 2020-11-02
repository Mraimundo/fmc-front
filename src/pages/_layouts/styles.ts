import styled, { css } from 'styled-components';

interface ContainerProps {
  simulating: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #f7f7f7;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  ${({ simulating }) =>
    simulating &&
    css`
      margin-top: 40px;
    `}
`;

export const SimulateIndicator = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  background: red;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 22px;

  > button {
    position: absolute;
    right: 10px;
    width: 100px;
    border: none;
    border-radius: 4px;
    background: none;
    text-decoration: underline;
    color: #fff;
    font-size: 18px;
  }
`;
