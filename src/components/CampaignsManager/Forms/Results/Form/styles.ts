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
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  text-transform: uppercase;

  > label {
    padding: 24px 60px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 593px;
    border: 1px dotted ${({ theme }) => theme.font.color.quartenary};
    > input {
      display: none;
    }

    > span {
      text-transform: uppercase;
      color: ${({ theme }) => theme.font.color.quartenary};
      font-weight: bold;
      font-size: 21px;
      margin-left: 20px;
    }
  }

  > button {
    width: 232px;
    height: 48px;
    text-transform: uppercase;
    margin-top: 60px;
  }
`;
