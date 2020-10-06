import styled from 'styled-components';
import background from 'assets/images/fmcProdutor/addNF-bg.png';

export const AddNFContainer = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 10px;
  background-size: 100% auto;
  background-position: center;

  background: linear-gradient(
    rgba(101, 85, 77, 0.17) 0%,
    rgba(255, 255, 255, 0.18) 47.78%,
    rgba(101, 85, 77, 0.09) 100%
  );
  color: ${({ theme }) => theme.font.color.primary};

  .AddNFContainer__inner {
    margin-top: 8px;
    position: relative;
    z-index: 2;
    padding-left: 25%;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    @media (max-width: 767px) {
      > * {
        position: relative;
        z-index: 3;
        margin-top: 20px;
      }
    }
    @media (min-width: 768px) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  .AddNFContainer__right {
    margin-top: 16px;
    @media (min-width: 768px) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  > div {
    border: 1px dashed ${({ theme }) => theme.font.color.secondary};
    border-radius: 10px;
    padding: 24px;
    @media (min-width: 768px) {
      padding: 50px 24px;
    }
  }
  a {
    text-decoration: none;
    color: #181818;
  }
  .AddNFContainer__title {
    text-transform: uppercase;
    font-size: 36px;
    line-height: 1.2;
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    @media (min-width: 768px) {
      margin: auto 20px;
    }
  }
`;
export const StyledStatusTable = styled.div`
  padding: 12px 22px;
  border-radius: 10px;
  background: ${({ theme }) => theme.font.color.tertiary};
  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  margin-top: 10px;
  @media (min-width: 768px) {
    min-width: 50%;
    margin-right: 40px;
  }
  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 8px auto;
  }
  .StatusTable__label,
  .StatusTable__value {
    flex-shrink: 0;
  }

  .StatusTable__dots {
    height: 1px;
    flex: 1 1 100%;
    border-bottom: 1px dotted;
    align-self: flex-end;
  }
`;

export const StyledUpload = styled.div`
  text-align: center;
  color: #e63027;
  flex-grow: 1;
  .button {
    cursor: pointer;
    position: relative;
    color: #fff;
    border-radius: 10px;
    background: #e63027;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    width: 100%;
    max-width: 100%;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 8px;
    line-height: 1;
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 10;
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
  }
`;
