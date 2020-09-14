import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  display: flex;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px;
    color: #2c2b2b;
  }
`;
