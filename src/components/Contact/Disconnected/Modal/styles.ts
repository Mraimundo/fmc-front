import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 690px;
  padding: 20px 40px;

  @media screen and (max-width: 720px) {
    width: 500px;
  }

  @media screen and (max-width: 520px) {
    width: 320px;
  }
`;
