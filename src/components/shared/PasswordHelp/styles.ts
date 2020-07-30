import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.7);

  h5 {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  ul {
    margin-left: 20px;
    li {
      margin-top: 6px;
      font-size: 12px;
      & + li {
        margin-top: 2px;
      }
    }
  }
`;
