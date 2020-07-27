import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  padding: 60px 100px;

  h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
  }

  p {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    max-width: 320px;
    text-align: center;
  }

  button {
    width: 160px;
    height: 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;
