import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.5);

  h5 {
    font-size: 12px;
    font-weight: bolder;
  }

  ul {
    margin-left: 20px;
    li {
      margin-top: 6px;
      font-size: 10px;
      & + li {
        margin-top: 2px;
      }
    }
  }
`;
