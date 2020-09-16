import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #717070;
  }
`;
