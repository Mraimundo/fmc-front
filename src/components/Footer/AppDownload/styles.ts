import styled from 'styled-components';

import DefaultModal from 'components/shared/Modal';

export const Wrapper = styled.div`
  position: absolute;
  right: 1.5em;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg,
  path {
    fill: ${({ theme }) => theme.font.color.primary};
  }
`;

export const DownloadText = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 0.8em;
  margin-right: 1.5em;
`;

export const AppDownloadModalStyled = styled(DefaultModal)`
  ._modalContainer {
    background-color: #efefef;
    max-width: 700px;
    width: 100%;
    padding: 1.5em;
    height: auto;
    border-radius: 10px;

    .close-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;

      svg {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }
  }
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  text-align: center;
  margin-bottom: 0.5em;
`;

export const JuntosApp = styled.div`
  &:before {
    content: 'APP PROGRAMA JUNTOS';
  }
`;

export const FmcApp = styled.div`
  &:before {
    content: 'APP FMC AGRÍCOLA';
  }
`;

export const WrapperModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${JuntosApp}, ${FmcApp} {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.font.color.primary};
    padding: 1.5em 1em 1em 1em;
    margin: 1em;
    border-radius: 10px;
    position: relative;

    .app-cellphone {
      margin-left: 1em;
    }

    &:before {
      background-color: #efefef;
      color: ${({ theme }) => theme.font.color.primary};
      font-family: ${({ theme }) => theme.font.fontFamily.medium};
      font-size: 0.8em;
      position: absolute;
      width: 175px;
      text-align: center;
      top: -7px;
      right: 50%;
      transform: translateX(87.5px);
    }
  }
`;
