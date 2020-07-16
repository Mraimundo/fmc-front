import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 24px;
  }

  > div {
    display: flex;
    align-items: flex-end;

    img {
      width: 160px;
      object-fit: cover;
    }

    a {
      margin-left: 10px;
      color: ${({ theme }) => theme.font.color.primary};
      svg {
        color: ${({ theme }) => theme.font.color.primary};
        > path {
          fill: ${({ theme }) => theme.font.color.primary};
        }
      }
    }
  }
`;
