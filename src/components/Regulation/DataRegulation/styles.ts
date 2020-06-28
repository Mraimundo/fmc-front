import styled from 'styled-components';
import { shade } from 'polished';
import { Button as DefaultButton } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: stretch;
  padding: 20px 20px 50px 20px;
`;

interface RegulationProps {
  type: 'primary' | 'secondary';
}
export const RegulationContent = styled.div<RegulationProps>`
  width: 100%;
  flex: 1;
  background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 20px;
  overflow-y: auto;

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

export const Button = styled(DefaultButton)`
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
`;

export const BoxActions = styled.div`
  display: flex;
  margin-top: 24px;

  > button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    opacity: 0.7;
    font-size: 14px;

    img {
      margin-right: 8px;
      width: 27px;
      height: 30px;
      transition: transform 0.2s;
    }

    & + button {
      margin-left: 20px;
    }

    transition: opacity 0.2s, transform 0.2s;
    will-change: opacity, transform;
    &:hover {
      opacity: 1;
     /* color: ${({ theme }) => shade(0.2, theme.link.fontColor)};*/
     img {
       transform: scale(1.1);
     }
    }
  }
`;

export const PrintRef = styled.div`
  @media print {
    margin: 50px;
    color: #000;
  }
`;
