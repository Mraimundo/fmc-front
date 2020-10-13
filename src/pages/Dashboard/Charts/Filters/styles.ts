import styled from 'styled-components';

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 10px;
  margin-top: 8px;

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    > span {
      padding: 5px 9px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
