import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #717070;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 20px;
`;

export const Item = styled.li`
  background: #fff;
  width: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: 20px;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  color: #484848;
`;

export const Value = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
  color: #484848;
`;
