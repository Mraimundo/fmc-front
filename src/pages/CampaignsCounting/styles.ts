import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 95px);
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  margin-left: 35px;
  margin-bottom: 25px;
  font-size: 24px;
`;

export const Tabs = styled.div`
  width: 100%;
  max-width: 466px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  background: #efefef;
  margin-bottom: 30px;
`;

interface ItemProps {
  selected: boolean;
}
export const Item = styled.div<ItemProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > span {
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.font.color.primary};
  }

  &:nth-child(1) {
    border-radius: 5px 0px 0px 5px;
  }

  &:nth-child(2) {
    border-radius: 0px 5px 5px 0px;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.font.color.primary};

      > span {
        color: #fff;
      }
    `}
`;

export const CampaignsSelectBox = styled.div`
  max-height: 250px;
  overflow: auto;
  max-width: 620px;
  padding-top: 0px;
  margin-top: 12px;
  margin-bottom: 50px;

  > button {
    max-width: 240px;
  }
`;

export const CampaignDetails = styled.div`
  width: 100%;
  max-width: 620px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 12px;

  svg {
    cursor: pointer;
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
`;

export const StyledBox = styled.div`
  ._inputContainer {
    max-width: 620px;
    margin-top: 20px;
  }

  .campaigns-pagination {
    list-style-type: none;
    display: flex;
    justify-content: center;
    color: #707070;
    font-size: 0.9em;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 5px;
      width: 10px;
      height: 10px;

      a {
        display: flex;
        align-items: center;
      }

      svg {
        width: 23px;
        height: 23px;
      }

      &:hover {
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }

      &.selected {
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }
    }
  }
`;

export const ActionBox = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    margin-bottom: 10px;
    font-size: 18px;
  }

  > button {
    width: 260px;
  }
`;
