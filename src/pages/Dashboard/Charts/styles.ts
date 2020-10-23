import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
  background: #fff;

  /*display: !!title,
          text: title,
          fontFamily: FONTS.bold,
          fontSize: 20,
          padding: 20,*/

  > h3 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    padding: 20px;
    color: #666;

    > span {
      font-size: 14px;
      transform: translateY(1px);
      margin-right: 3px;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 0 5px;

    > div {
      & + div {
        margin-top: 10px;
      }
    }
  }
`;
