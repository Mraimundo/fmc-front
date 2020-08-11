import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';
import DefaultModal from 'components/shared/Modal';
import { lighten, shade } from 'polished';
import background from 'assets/images/background.svg';
import backgroundHeader from 'assets/images/background-header.svg';

interface RegulationProps {
  type: 'primary' | 'secondary';
}
export const RegulationContent = styled.div<RegulationProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  flex: 1;
  background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 50px 0 0 90px;
  overflow-y: auto;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.quartenary};
    font-size: 18px;
  }

  > div {
    width: 100%;
    flex: 1;
    background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
    color: ${({ theme, type }) => theme.regulation[type].fontColor};
    overflow-y: auto;
    padding: 30px 90px 50px 0;
  }
`;

export const StyledButtonConfirm = styled(DefaultButton)`
  max-width: 275px;
  height: 48px;
  margin-top: 30px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  background-color: #dd0022;
  align-self: center;
  margin-bottom: 10px;
  font-size: 18px;

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

export const Content = styled.div`
  max-height: calc(100% - 161px);
  display: flex;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme.font.color.quartenary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 35px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background});

  > img {
    width: 320px;
    margin-top: 20px;
    margin-bottom: 18px;
  }

  ${Content} {
    max-width: 1100px;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundHeader});
  > img {
    width: 364px;
  }
`;

export const StyledAgreementTermPending = styled.div<RegulationProps>`
  width: 100%;
  flex: 1;
  text-align: center;
  background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 50px 90px;
  overflow-y: auto;

  h1 {
    text-align: center;
  }

  h4 {
    margin: 15px 0;
  }
`;
