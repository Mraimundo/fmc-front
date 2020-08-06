import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 340px;
`;

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
`;

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
`;

export const SeeCompleteShowcaseText = styled.h1`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.2em;
  text-align: center;
`;
