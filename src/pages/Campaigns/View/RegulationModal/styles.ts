import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 0;
    max-width: 993px;
    width: 100%;
    height: 100%;
    max-height: 570px;
  }
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  > button {
    width: 232px;
    height: 48px;
    text-transform: uppercase;
    align-self: center;
    margin-bottom: 25px;
    border-radius: 5px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
  }
`;

export const Content = styled.div`
  color: #000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 127px;

  > h3 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
  }

  > span {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    color: ${({ theme }) => theme.font.color.secondary};
    margin-top: 10px;

    & + span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      color: ${({ theme }) => theme.font.color.primary};
      margin-top: 24px;
    }
  }

  > button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 15px;

    svg {
      margin-right: 8px;
      width: 27px;
      height: 30px;
      transition: transform 0.2s;
      path {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }

    transition: transform 0.2s;
    will-change: transform;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 720px) {
    padding-left: 5px;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > button {
    border: none;
    background: transparent;
  }
`;

export const RegulationBox = styled.div`
  width: 100%;
  max-width: 699px;
  height: 246px;
  color: ${({ theme }) => theme.font.color.quartenary};
  font-size: 14px;
  margin-top: 6px;
  overflow-y: scroll;
`;
