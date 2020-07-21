import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  flex: 1;
  height: calc(100vh - 257px);

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 8px;
  }

  > ._actionButton {
    width: 232px;
    height: 48px;
    text-transform: uppercase;
    align-self: center;
    margin-bottom: 60px;
  }
`;

interface RegulationProps {
  type: 'primary' | 'secondary';
}
export const RegulationContent = styled.div<RegulationProps>`
  width: 100%;
  flex: 1;
  background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 20px 20px 20px 0;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme, type }) =>
      theme.regulation[type].scrollBarColor};
  }
`;

export const RegulationDownload = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.font.color.primary};
  background: transparent;
  width: auto;
  margin-bottom: 14px;
  margin-top: 20px;
  border: none;
  height: auto;
  align-self: flex-start;
  height: 38px;

  svg {
    margin-right: 12px;
    fill: ${({ theme }) => theme.font.color.primary};
    path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;
