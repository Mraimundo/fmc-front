import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
  }

  > span {
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 3px;
  margin-bottom: 13px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 7px;

  > span {
    margin-left: 5px;
    width: 209px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efefef;
    color: #707070;
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
    font-size: 21px;
    position: relative;
    padding-top: 6px;

    > span {
      position: absolute;
      top: 1px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
    }
  }
`;

export const Box = styled.h5`
  text-align: center;
  width: 150px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.font.color.quartenary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 16px;
`;
