import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 8px;
  }

  > a {
  }
`;
