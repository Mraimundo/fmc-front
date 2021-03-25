import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const MessageBox = styled.div`
  background-color: #dbded6;
  padding: 14px;
  position: relative;
  //margin-left: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  span {
    display: block;
    width: 100%;
    font-size: 15px;
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  p {
    width: 100%;
    font-size: 15px;
    color: ${({ theme }) => theme.font.color.secondary};
    margin: 5px 0%;
  }

  &:after {
    content: '';
  }

  &:before {
    content: '';
    position: absolute;
    border-radius: 8px 0 0 0;
    top: 0;
    right: -36px;
    border: 19px solid #dbded6;
    border-right: 30px solid transparent;
    border-bottom: 12px solid transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 1rem;
`;

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
`;
