import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 40px 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    width: 100%;
    max-width: 710px;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-left: 35px;
    margin-bottom: 25px;
    font-size: 24px;
  }

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

  @media screen and (max-width: 480px) {
    font-size: 10px;
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

    &:before {
      border-width: 25px 0 25px 15px;
      right: -15px;
    }
  }
`;

export const CampaignsList = styled.ul`
  list-style-type: none;
  display: flex;

  li {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
    font-size: 1em;
    margin: 0.5em 1.5em;
    cursor: pointer;
    transition: color 150ms ease;

    &:hover {
      color: #999999;
    }
  }
`;
