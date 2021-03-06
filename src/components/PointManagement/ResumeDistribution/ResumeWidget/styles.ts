import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  background-color: #efefef;
  border-radius: 10px;
  margin-top: 1em;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const RoleName = styled.h4`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  width: 100%;
`;

export const RoleItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1em;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalResume = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1.2px solid #fff;
  padding-top: 1em;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;
