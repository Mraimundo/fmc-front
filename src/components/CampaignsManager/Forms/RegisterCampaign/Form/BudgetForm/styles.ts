import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 12px;
    margin-top: 30px;
  }

  > h5 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 18px;
    margin-top: 35px;
    margin-bottom: 8px;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 409px;
  display: flex;
  align-items: center;
  margin-top: 12px;

  > div {
    width: 24px;
  }

  > span {
    padding: 0;
  }

  > h6 {
    margin-left: 10px;
    flex: 1;
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 16px;
  }

  > input[type='text'] {
    width: 194px;
    height: 36px;
    padding: 0 16px;
    border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  }
`;
