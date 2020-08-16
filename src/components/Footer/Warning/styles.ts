import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: 'ATENÇÃO:';
    position: absolute;
    left: 14%;
    bottom: 50%;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 44%;
    height: 3px;
    background-color: rgb(255 255 255 / 18%);
    width: 20%;
  }

  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: flex-start;

    &:before {
      left: 2.3em;
      top: 1.6em;
      position: relative;
    }

    &:after {
      left: -19px;
      top: 30%;
      bottom: inherit;
    }
  }
`;

export const Rectangle = styled.div`
  margin: 1.5em;
  padding: 1em;
  border: 1.5px solid rgb(255 255 255 / 11%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: auto;
  font-size: 0.9em;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};

  div:first-child {
    margin-right: 2em;
  }

  span {
    display: block;
  }

  @media screen and (max-width: 1290px) {
    width: 50%;
  }

  @media screen and (max-width: 580px) {
    border: none;
    width: 100%;
  }
`;
