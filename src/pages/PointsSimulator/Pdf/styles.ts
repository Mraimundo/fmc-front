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

  ._actions-container-footer {
    display: none;
  }

  #result {
    min-height: auto;
  }

  ._calculator-action-button {
    display: none;
  }

  ._footer-dolar-container {
    position: unset;
    z-index: 0;
    align-self: center;
    margin-top: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 233px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.font.color.primary};
  margin-top: 40px;

  > span {
    font-size: 14px;
    text-align: center;
    color: #fff;
  }
`;
