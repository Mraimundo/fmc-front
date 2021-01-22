import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductItemStyled = styled.li`
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
  width: 260px;
  margin-right: 1em;

  a {
    text-decoration: none;
    color: #181818;
  }

  @media screen and (max-width: 480px) {
    &:last-child {
      display: none;
    }
  }
`;

export const StyledLink = styled.a``;

export const NameWrapper = styled.div`
  padding: 1em;
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
  height: 95px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Name = styled.h4`
  font-size: 0.8em;
`;

export const Price = styled.h4`
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};

  span {
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 0.7em;
  }
`;

export const ImageWrapper = styled.div`
  height: 245px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
`;

export const SeeCompleteShowcaseText = styled.button`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.2em;
  text-align: center;
  background: transparent;
  border: 0;
  appearance: none;
`;

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 340px;

  @media screen and (max-width: 480px) {
    height: auto;
    flex-wrap: wrap;
    margin-top: 1.5em;

    ${ImageWrapper} {
      background-color: #fff;
      min-width: 120px;
      width: 120px;
      height: 100px;
      overflow: hidden;

      img {
        width: 120px;
        min-width: 120px;
        height: 100px;
        object-fit: contain;
      }
    }

    ${ProductItemStyled} {
      width: 100%;
      margin-right: 0;
      background-color: transparent;
      margin-bottom: 1em;
      border-bottom: 1px solid rgb(255 255 255 / 15%);
      border-radius: 0;
      padding-bottom: 1em;

      a {
        display: flex;
        align-items: center;
        color: #fff;
      }
    }

    ${NameWrapper} {
      font-size: 1.3em;
    }
  }
`;

export const MobileSeeCompleteShowcase = styled(Link)`
  width: 100%;
  background: #fff;
  padding: 1em;
  border-radius: 7px;
  margin: 1em auto 0;
  display: flex;
  justify-content: center;
  height: 45px;
  align-items: center;
  text-decoration: none;
  font-size: 1.1em;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};

  @media screen and (min-width: 480px) {
    display: none;
  }
`;
