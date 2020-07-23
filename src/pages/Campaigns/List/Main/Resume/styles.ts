import styled from 'styled-components';
import plusButton from 'assets/images/indication/add.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Box = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  padding: 20px;
  display: flex;
  width: 100%;
  max-width: 492px;

  > h6 {
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    margin-bottom: 14px;
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 6px;

    > h5 {
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.primary};
    }

    span {
      flex: 1;
      border-bottom: 1px solid ${({ theme }) => theme.font.color.primary};
      margin: 0 6px;
      transform: translateY(-3px);
    }
  }
`;

export const Action = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  > span {
    font-weight: bold;
    font-size: 21px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-right: 25px;
  }
`;

export const AddButton = styled.button`
  width: 65px;
  height: 65px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: none;
  background: transparent;
  transition: background 0.5s ease, transform 0.3s;
  background: url(${plusButton}) center center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.font.color.primary};
`;
