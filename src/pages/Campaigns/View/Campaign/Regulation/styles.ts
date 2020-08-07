import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
  }

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-top: 12px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 3px;
`;
