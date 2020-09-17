import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #717070;
  }

  @media screen and (max-width: 500px) {
    margin-top: 16px;

    ._extra-margin {
      margin-top: 16px;
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 60px;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 6px;
  }
`;
