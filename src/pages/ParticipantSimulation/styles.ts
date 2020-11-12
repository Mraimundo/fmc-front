import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  .participants-pagination {
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

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
  margin-top: 3px;
`;
