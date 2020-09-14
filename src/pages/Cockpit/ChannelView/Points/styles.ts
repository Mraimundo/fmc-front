import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
`;

export const Item = styled.li`
  background: #fff;
  width: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: 10px;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  color: #2c2b2b;
`;

export const Value = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
  color: #2c2b2b;
`;
