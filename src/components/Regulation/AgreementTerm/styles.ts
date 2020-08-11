import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';
import DefaultModal from 'components/shared/Modal';
import { lighten, shade } from 'polished';
import background from 'assets/images/background.svg';
import backgroundHeader from 'assets/images/background-header.svg';

interface RegulationProps {
  type: 'primary' | 'secondary';
}
export const StyledAgreementTermContent = styled.div<RegulationProps>`
  width: 100%;
  flex: 1;
  text-align: justify;
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

export const StyledButtonConfirm = styled(DefaultButton)`
  max-width: 275px;
  height: 72px;
  margin-top: 30px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  background-color: #dd0022;
  align-self: center;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 36px 0;

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
    width: 600px;
    height: 400px;
    margin: 0;
    padding: 0;
    max-height: 100vh;
    color: #000;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
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

export const RegulationDownload = styled.button`
  height: 60px;
  width: 250px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.font.color.primary};
  background: #ddd;
  margin-bottom: 14px;
  margin-top: 20px;
  border: none;
  align-self: flex-start;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StyledUploadAgreementTerm = styled.button`
  height: 60px;
  width: 250px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.font.color.primary};
  background: #ddd;
  margin-bottom: 14px;
  margin-top: 20px;
  border: none;
  align-self: flex-start;

  input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  button {
    height: 60px;
    width: 250px;
    background: transparent;
    border: none;
    font-size: 16px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
`;
