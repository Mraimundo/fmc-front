import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  display: flex;
  & + div {
    margin-top: 15px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 104px;
  height: 104px;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.2);
  align-self: center;

  > img {
    width: 100%;
    max-width: 84px;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  justify-content: space-between;
  padding: 2px 0;
  flex: 1;
`;

export const BodyDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  height: 20px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.font.color.primary};
  color: ${({ theme }) => theme.font.color.tertiary};
  border-radius: 5px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const ProductType = styled.span`
  font-size: 12px;
  color: #707070;
`;

export const ProductName = styled.h5`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 14px;
  color: ${({ theme }) => theme.font.color.primary};
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  font-size: 12px;
  color: #707070;
`;

export const Actions = styled.div`
  display: flex;

  > a {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 12px;
    text-transform: uppercase;
    color: #e63027;
    border: 1px solid #e63027;
    border-radius: 5px;
    padding: 0 11px;
    height: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + a {
      margin-left: 10px;
    }
  }
`;
