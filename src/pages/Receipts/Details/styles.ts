import styled, { css } from 'styled-components';


export const Container = styled.div`
    position: fixed; 
    top: 0; left: 0; 
    width: 100%; height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    z-index: 40;
    font-size: 12px;
    
`;


interface ModalContainerProps {
  modalOpen: boolean;
}

export const ModalContainer = styled(Container) <ModalContainerProps>`
  visibility: hidden;
  ${({ modalOpen }) =>
      modalOpen &&
      css`
        visibility: visible;
      `}
  `;


export const PageTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px; 
  text-align: center;
`;

export const Content = styled.div`
    padding: 36px;
    position: relative;
    z-index: 50;
    background: #fff;
    width: 80%;
    max-width: 750px; 
    max-height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between; 
    overflow-y: scroll;
    h3, strong {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
    }
   
`;
export const DetailsSection = styled.div`
   
    @media (min-width:768px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      > div {
        width: 48%;
      } 
    } 
`;

export const DetailsBlock = styled.div`
    padding: 12px 24px;
    background: #efefef;
    margin: 24px 0 ;
    color: ${({ theme }) => theme.font.color.primary};
    > h3 {
      padding: 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      td {
        padding: 4px 2px 0 0;
      }
    }
`;


export const ProductList = styled.div`
    height: 20vh;
    flex-shrink: 0;
    overflow-y: auto;
`;

export const ProductItem = styled.div`
    padding: 12px 24px;
    background: #efefef;
    margin: 24px 0 ;
    color: ${({ theme }) => theme.font.color.primary};
    > div {
      margin-bottom: 12px;
    }
    @media (min-width:768px) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      > div {
        width: 30%;
        margin-bottom: 0;
      } 
    }
`;

export const CloseModalOverlay = styled.div`
    position: fixed;
    z-index: 40;
    top: 0; left: 0; 
    width: 100%; height: 100%;
    background: rgba(0,0,0,.5);
    cursor: pointer;
`;

export const CloseModal = styled.div`
    position: absolute;
    top: 5px;
    right: 15px;
    cursor: pointer;
`;

export const LinkBottom = styled.div`
    color: ${({ theme }) => theme.font.color.primary};  
    margin-top: 32px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    a {
      text-decoration: underline;
      color: inherit;
    }
    @media (min-width:768px) {
      font-size: 16px;
    }
`;



