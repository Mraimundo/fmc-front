import styled, { css } from 'styled-components';


interface ToggleProps {
  isOpen: boolean;
}

export const Container = styled.div`
      position: relative;
      /* padding: 12px 60px 12px 22px; */
      margin: 24px 0;
      color: ${({ theme }) => theme.font.color.primary};
      
`;
export const ListItemContainer = styled.div`
      width: 100%;
      > div {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;

        > h3{
          font-size: 12px;
          font-family: ${({ theme }) => theme.font.fontFamily.bold};
          color: ${({ theme }) => theme.font.color.primary};
          margin-left: 10px;
        }

        > h4{
          font-size: 12px;
          font-family: ${({ theme }) => theme.font.fontFamily.bold};
          color: ${({ theme }) => theme.font.color.primary};
          margin-right: 25px;
        }
      }     
`;


export const Content = styled.div`
    padding: 12px 0; 
    background: #efefef;
    padding: 12px 60px 12px 22px;
    margin: 24px 0;
`;


export const ListItem = styled.table`
      width: 100%;
      font-size: 14px;
      margin-top: 12px;
      .list-tipoponto {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        > p {
          font-size: 12px;
          font-family: ${({ theme }) => theme.font.fontFamily.bold};
          margin-left: 10px;
        }
        > span {
          font-size: 12px;
          font-family: ${({ theme }) => theme.font.fontFamily.bold};
          margin-right: 35px;
        }
      }
      .list-description{
        padding: 7px 10px;
        border-top: 3px solid #efefef;
        background: #fff;
        margin-top: 7px;

        > p {
          font-size: 12px;
          font-family: ${({ theme }) => theme.font.fontFamily.regular};
          color: ${({ theme }) => theme.font.color.primary};
        }
      }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

     
    > div {
      flex-shrink: 0;
      h3 {
        font-size: 14px; 
        font-family: ${({ theme }) => theme.font.fontFamily.regular};
        font-weight: normal;
      }
      h4 {
        font-size: 16px; 
        font-family: ${({ theme }) => theme.font.fontFamily.bold};
      }
    }
  
    .list-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      > div:last-child{
        margin-top: 10px;
        width: max-content;
        @media (min-width: 768px) {
          text-align: right;
        }
      }
      > span {
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.font.color.secondary};
        flex: 1 1 100%;
      }
    }
`;

export const Toggle = styled.button<ToggleProps>`
    /* appearance: none; 
    margin: auto;
    display: block; */
    position: absolute;
    border:0;
    width: 30px;
    height: 30px;
    right: -33px;
    top: -8px;
    transform: rotate(180deg);
    /* background-color: transparent;
    background-position: center;
    background-size: auto 20px;*/
    background-repeat: no-repeat; 
    background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-up' class='svg-inline--fa fa-chevron-up fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%233B302A' d='M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z'%3E%3C/path%3E%3C/svg%3E");

    ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(0deg);
    `};
`;
