import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

export const Container = styled.div`
  text-align: center;
  color: #e63027;
  flex-grow: 1;
`;

export const Button = styled.div`
  cursor: pointer;
  position: relative;
  color: #fff;
  border-radius: 10px;
  background: #e63027;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  appearance: none;
  border: 0;
  width: 100%;
  max-width: 100%;
  padding: 10px 12px;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 8px;
  line-height: 1;
  font-family: ${({ theme }) => theme.font.fontFamily.condensed};

  &[disabled] {
    cursor: default;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
  }

  .icon {
    margin-bottom: 2px;
  }

  .icon svg {
    display: block;
    margin: auto auto 8px auto;
    height: 21px;
    fill: currentColor;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Modal = styled(DefaultModal)`
  padding: 0;
  ._modalContainer {
    width: 80%;
    max-width: 700px;
    margin: 0;
    padding: 0;
    max-height: 100vh;
    color: #fff;
  }
`;

export const ContainerModal = styled.div`
  position: relative;

  padding: 20px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 20px;
  text-transform: uppercase;
  h3 {
    margin: 12px auto;
    font-size: 1em;
  }
  @media (min-width: 768px) {
    font-size: 26px;
    height: 340px;
    h3 {
      margin: 114px auto auto;
    }
  }
`;
export const ButtonModal = styled.button`
  width: 181px;
  margin: 12px auto;
  padding: 12px 8px;
  border-radius: 10px;
  color: #e63027;
  font-size: 18px;
  border: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  @media (min-width: 768px) {
    margin-top: auto;
    margin-bottom: 60px;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 14px;
  height: 14px;
  appearance: none;
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath id='ic_close_24px' d='M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z' transform='translate(-5 -5)' fill='%23fff'/%3E%3C/svg%3E%0A");
`;
