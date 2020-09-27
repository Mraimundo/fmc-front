import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #34ffff;
  }

  ._extra-margin {
    margin-top: 39px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 16px;

    ._extra-margin {
      margin-top: 16px;
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: 320px 320px;
  grid-gap: 60px;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 6px;
  }
`;
