import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 20px 60px;

  > h3 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    display: flex;
  }

  > span {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 35px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 8px;

    > h3 {
      font-size: 18px;
      text-align: center;
      display: flex;
      flex-direction: column-reverse;
      > span {
        display: block;
        font-size: 12px;
        align-self: flex-end;
        transform: translateX(-20px);
      }
    }

    > span {
      width: 100%;
      text-align: center;
      margin-top: 30px;
    }
  }
`;

interface ContentFormProps {
  show: boolean;
}
export const ContentForm = styled.div<ContentFormProps>`
  max-height: 800px;
  border-bottom: 5px solid #e9ece6;
  border-left: 5px solid #e9ece6;
  border-right: 5px solid #e9ece6;
  padding: 10px 20px;
  > div {
    opacity: 1;
    transition: opacity 1s;
  }
  transition: max-height 0.5s ease, border 1s ease;
  ${({ show }) =>
    !show &&
    css`
      max-height: 0;
      overflow: hidden;
      border-color: transparent;
      > div {
        opacity: 0;
      }
    `}
`;
