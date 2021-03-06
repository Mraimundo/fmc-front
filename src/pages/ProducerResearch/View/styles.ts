import styled from 'styled-components';
import DefaultGrid from 'components/Cards/YourOpinion';
// import DefaultGrid from 'components/Cards/ViewTest';


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #fff;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  > h4 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin: 30px 0 35px 25px;
  }

  > button {
    width: 265px;
    height: 36px;
    margin: 25px 0;
    align-self: center;
    border-radius: 0;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;

    > button {
      width: 100%;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

export const Grid = styled(DefaultGrid)`
  > a {
    p {
      display: none;
    }
  }
`;



