import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  padding: 60px 100px;

  h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 26px;
    margin-bottom: 60px;
  }

  button {
    width: 160px;
    height: 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;
