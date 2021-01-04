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

  > button {
    width: 170px;
    height: 40px;
    border-radius: 4px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 3px;
`;
