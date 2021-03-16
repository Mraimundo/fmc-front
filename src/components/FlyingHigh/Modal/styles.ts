import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  padding: 20px 0 60px 0;
  margin: auto;
  @media (min-width: 768px) {
    width: 743px;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
  }

  p {
    margin-top: 18px;
    margin-bottom: 20px;
    font-size: 18px;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  button {
    width: auto;
    height: 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.tertiary};
    }
  }
`;
