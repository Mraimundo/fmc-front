import styled from 'styled-components';

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
