import styled from 'styled-components';

export const Container = styled.div`
  width: 195px;
  height: 56px;
  border-radius: 5px;
  background: #dad8d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.font.color.primary};

    & + span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 18px;
    }
  }
`;
