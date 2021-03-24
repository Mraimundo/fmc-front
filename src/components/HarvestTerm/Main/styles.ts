import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};

  .terms-pagination {
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

  @media screen and (max-width: 1080px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.primary};
  width: 100%;
  max-width: 439px;
  padding-top: 23px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 1rem;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
