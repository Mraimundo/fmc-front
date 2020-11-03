import styled, { css } from 'styled-components';

export const Container = styled.tr``;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  > span {
    font-size: 13px;
    color: ${({ theme }) => theme.font.color.primary};

    & + span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 16px;
      color: ${({ theme }) => theme.font.color.primary};
      text-transform: uppercase;
      margin-top: 2px;
    }
  }
`;

export const CustomDataBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  > span {
    font-size: 11px;
    color: ${({ theme }) => theme.font.color.primary};

    & + span {
      transform: translateY(8px);
      color: #35a22c;
    }
  }
`;

interface CustomInputBoxProps {
  blocked: boolean;
}

export const CustomInputBox = styled.div<CustomInputBoxProps>`
  input {
    width: 86px;
    height: 33px;
    border: none;
    border-radius: 5px;
  }

  ${({ blocked }) =>
    blocked &&
    css`
      input {
        background: #fff2f2;
        cursor: not-allowed;
      }
    `}
`;
