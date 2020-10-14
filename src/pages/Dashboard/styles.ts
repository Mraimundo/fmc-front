import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 920px;
  flex-direction: column;
  background: transparent;
  padding: 30px 0;

  @media screen and (max-width: 720px) {
    padding: 40px 10px;
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    margin-bottom: 15px;
    margin-top: 40px;
  }

  @media screen and (max-width: 720px) {
    padding: 10px;

    > h3 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const TabWrapper = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  display: block;
  border: 1.2px solid #808285;
  border-radius: 7px;
  padding: 1em 2em;
  margin-top: 25px;

  @media screen and (max-width: 720px) {
    padding: 1em 0.5em;
    border: none;
  }
`;

export const TabsList = styled.ul`
  list-style-type: none;
  display: flex;
  width: calc(100% - 30px);
  margin-bottom: 1.5em;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
`;

interface TabProps {
  active: boolean;
}
export const Tab = styled.li<TabProps>`
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 1.15em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 80px;
  position: relative;
  cursor: pointer;
  font-size: 1.1em;

  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  &:last-child {
    span {
      transform: translateX(30px);
    }
  }

  ${({ active }) =>
    !active
      ? css`
          color: ${({ theme }) => theme.font.color.primary};
          background-color: #fafafa;

          &:before {
            border-color: transparent transparent transparent #fafafa;
          }
        `
      : css`
          color: #fff;
          background-color: ${({ theme }) => theme.font.color.primary};

          &:before {
            border-color: transparent transparent transparent
              ${({ theme }) => theme.font.color.primary};
          }
        `}

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 0 40px 30px;
    position: absolute;
    right: -30px;
    z-index: 1;
    transform: rotate(360deg);
  }

  @media screen and (max-width: 480px) {
    height: 50px;

    &:last-child {
      span {
        transform: translateX(15px);
      }
    }

    &:before {
      border-width: 25px 0 25px 15px;
      right: -15px;
    }
  }
`;
