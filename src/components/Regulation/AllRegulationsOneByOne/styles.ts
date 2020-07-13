import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';
import DefaultModal from 'components/shared/Modal';
import { darken, lighten, shade } from 'polished';

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

export const Modal = styled(DefaultModal)`
  padding: 0;
  ._modalContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    max-height: 100vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    90deg,
    rgba(4, 36, 44, 1) 0%,
    rgba(56, 77, 85, 1) 100%
  );

  > img {
    width: 320px;
    margin-top: 20px;
    margin-bottom: 18px;
  }

  > div {
    max-width: 800px;
    width: 100%;
  }

  button {
    height: 45px;
    text-transform: uppercase;
    font-weight: 700;
    background-color: #dd0022;
    width: 280px;
    align-self: center;
    margin-bottom: 65px;

    &:hover {
      background: ${shade(0.2, '#dd0022')}
        radial-gradient(circle, transparent 1%, ${shade(0.2, '#dd0022')} 1%)
        center/15000%;
    }

    &:active {
      background-color: ${lighten(0.1, '#dd0022')};
      background-size: 100%;
      transition: background 0s;
    }

    &:disabled {
      background-color: ${shade(0.2, '#dd0022')};
    }
  }
`;

export const Content = styled.div`
  max-height: calc(100% - 136px);
  display: flex;
  flex-direction: column;
`;
