import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 1em;

  @media screen and (max-width: 1199px) {
    font-size: 12px;
  }
`;

export const TabWrapper = styled.div`
  max-width: 710px;
  width: 100%;
  margin: 0 auto;
  display: block;
  border: 1.2px solid #808285;
  border-radius: 7px;
  padding: 1em 2em;
`;

export const TabsList = styled.ul`
  list-style-type: none;
  display: flex;
  width: calc(100% - 30px);
  margin-bottom: 1.5em;
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
`;
