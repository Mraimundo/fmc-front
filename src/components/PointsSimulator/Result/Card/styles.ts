import styled from 'styled-components';

export const Container = styled.div`
  width: 195px;
  height: 135px;
  border-radius: 10px;
  background: #d1cfd0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 8px 10px 8px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 14px;
  }

  > span {
    font-size: 10px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 3px;
  }

  > ul {
    list-style: none;
    width: 100%;

    li {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      height: 25px;
      align-items: center;

      &:nth-child(odd) {
        background: #e6e4e5;
      }

      > span {
        width: 100%;
        text-align: left;
        font-size: 10px;
        color: ${({ theme }) => theme.font.color.primary};

        & + span {
          text-align: center;
        }
      }
    }
  }
`;

interface StyledPercentageBarProps {
  completed: number;
}

export const StyledPercentageBar = styled.div<StyledPercentageBarProps>``;
