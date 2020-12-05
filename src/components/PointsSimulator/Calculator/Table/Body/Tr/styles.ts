import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  participate: boolean;
}

export const Container = styled.tr<ContainerProps>`
  height: 65px;
  background: #dad8d9;
  margin-bottom: 8px;

  ${({ participate }) =>
    !participate &&
    css`
      background: ${lighten(0.1, '#dad8d9')};
    `}
`;

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
    padding: 0 5px;
    font-size: 14px;
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
