import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .farmers-pagination {
    list-style-type: none;
    display: flex;
    justify-content: center;
    color: #707070;
    font-size: 0.9em;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 5px;
      width: 10px;
      height: 10px;

      a {
        display: flex;
        align-items: center;
      }

      svg {
        width: 23px;
        height: 23px;
      }

      &:hover {
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }

      &.selected {
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }
    }
  }
`;
