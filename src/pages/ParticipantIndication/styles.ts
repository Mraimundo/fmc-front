import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
    font-weight: bold;
    color: #193b4e;
    > span {
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
      margin-left: 8px;
    }
  }

  > span {
    font-size: 18px;
    font-weight: bold;
    color: #193b4e;
    margin-top: 35px;
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
