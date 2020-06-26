import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 20px;
  background: #fff;
  max-width: 1100px;

  @media screen and (max-width: 720px) {
    justify-content: center;
    padding-top: 18px;

    img + img {
      display: none;
    }
  }
`;
