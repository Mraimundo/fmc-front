import styled, { css } from 'styled-components';

export const BoxTitle = styled.div`
  background-color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
  width: fit-content;
  height: 45px;
  padding: 0 2em;
  font-size: 0.9em;
`;

export const Body = styled.div`
  padding: 1.5em;
`;

interface WrapperProps {
  reverse: boolean;
}
export const WrapperBox = styled.div<WrapperProps>`
  margin-bottom: 2em;

  ${({ reverse }) =>
    reverse
      ? css`
          ${BoxTitle} {
            background-color: #b4bfc5;
          }

          ${Body} {
            border: 1.2px solid #b4bfc5;
          }
        `
      : css`
          ${BoxTitle} {
            background-color: ${({ theme }) => theme.font.color.primary};
          }

          ${Body} {
            border: 1.2px solid ${({ theme }) => theme.font.color.primary};
          }
        `}
`;

export const WrapperValues = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 150px;
  margin: 1em;
`;

export const ProgressTitle = styled.div`
  color: #000000;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  text-align: center;
  font-size: 0.8em;
`;

export const GoalText = styled.p`
  color: #000000;
  font-size: 0.7em;
  text-align: center;
`;

export const CircularSectionItem = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;
