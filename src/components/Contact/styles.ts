import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.contact.ballon.backgroundColor};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 40px;
    font-weight: bolder;
  }
`;
