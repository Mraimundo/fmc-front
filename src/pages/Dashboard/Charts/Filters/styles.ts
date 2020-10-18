import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /*background: #fff;*/
  margin-top: 12px;

  > button {
    width: 111px;
    height: 40px;
    border-radius: 4px;
    background: ${({ theme }) => theme.font.color.primary};
    border: none;
    opacity: 0.6;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 20px;
    color: ${({ theme }) => theme.font.color.tertiary};
    margin-bottom: 6px;
  }
`;

interface FieldsProps {
  opened: boolean;
}

export const Fields = styled.div<FieldsProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 10px;

  overflow: hidden;
  width: 100%;
  padding: 0;
  max-height: 1px;

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    > span {
      padding: 5px 9px;
    }
  }

  transition: max-height 0.2s;

  ${({ opened }) =>
    opened &&
    css`
      transition: max-height 0.8s;
      max-height: 600px;
    `}

  @media screen and (max-width: 720px) {
    padding: 0 10px;
  }
`;
