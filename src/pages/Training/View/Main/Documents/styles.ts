import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
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

export const Separator = styled.div`
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 35px;
  margin-bottom: 35px;
`;
