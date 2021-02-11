import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 10px;
  width: 100%;
  height: 122px;
`;

export const CityWrapper = styled.div`
  display: flex;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  > img {
    width: 53px;
    height: fit-content;
    margin-top: 6px;
    margin-left: 9px;
    margin: 6px 8px 0 9px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.quartenary};
    }

    > h3 {
      /*font-family: $ {({theme}) => theme.font.fontFamily.bold};*/
      font-size: 28px;
      color: ${({ theme }) => theme.font.color.quartenary};
      margin: 5px 0 1px 0;
    }
  }
`;

export const NextDaysWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 40px;
      margin-bottom: 5px;
    }

    > span {
      font-size: 10px;
      color: ${({ theme }) => theme.font.color.quartenary};
      margin-top: 2px;
    }

    > div {
      width: 48px;
      display: flex;
      justify-content: space-between;
      > h3 {
        font-size: 12px;
        color: ${({ theme }) => theme.font.color.quartenary};

        > span {
          margin-left: 2px;
        }
      }
    }
  }
`;

export const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 4px;

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 20px;
    }

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.font.color.quartenary};
      margin-left: 6px;
    }
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 69px;
  background: #808285;
  margin: 8px 35px;
`;
