import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};
  background: #fff;
`;

export const Content = styled.div`
  display: block; 
  padding-bottom: 40px;
  max-width: 1100px;
  width: 100%;
  margin: auto;

  > img {
    width: 100%;
  }
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  padding-top: 40px;
  margin-bottom: 32px;
`;

export const ExtractLegend = styled.div`
  color: #000;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 12px;

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const ExtractEmpty = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
  button {
    max-width: 150px;
    margin: 30px auto;
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.button.primary.backgroundColor};
  border-radius: ${({ theme }) => theme.button.primary.borderRadius};
  padding: 10px 15px;
  color: ${({ theme }) => theme.button.primary.fontColor};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
`;


export const StatusContainer = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 10px;
  background-size: 100% auto;
  background-position: center;
  width: 100%;

  background: linear-gradient(
    rgba(101, 85, 77, 0.17) 0%,
    rgba(255, 255, 255, 0.18) 47.78%,
    rgba(101, 85, 77, 0.09) 100%
  );
  color: ${({ theme }) => theme.font.color.primary};
`;

export const StatusContent = styled.div`
  position: relative;

  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  border-radius: 10px;
  padding: 24px;
  @media (min-width: 768px) {
    padding: 50px 24px;
  }
  a {
    text-decoration: none;
    color: #181818;
  }

  @media (max-width: 767px) {
    > * {
      margin-top: 20px;
    } 
  }
 

  @media (min-width: 768px) {
    display: flex; 
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const StatusItem = styled.div`
  @media (min-width: 768px) {
    width: 30%
  }
`;
export const StatusTitle = styled.div`
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px; 
`;
export const StatusBox = styled.div`
    padding: 12px 22px;
    border-radius: 0px;
    background: #fff;
    border: 1px dashed ${({ theme }) => theme.font.color.secondary};
    margin-top: 10px;
`;

 
export const StatusButton = styled.div`
    padding: 12px 22px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    display: block;
    background:  ${({ theme }) => theme.font.color.primary};
    margin-top: 10px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;

export const NFList = styled.div`
    padding: 12px 22px;
    background: #efefef;
    margin: 24px 0;
    color: ${({ theme }) => theme.font.color.primary};
     table {
      width: 100%;
      font-size: 14px;
      text-align: left;
      border-collapse: collapse;
    }
    th {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 14px;
      text-align: left;
      padding: 7px 10px;
    }
    td {
      background: #fff;
      padding: 7px 10px;
      border-top: 3px solid #efefef;
    }
`;
export const NFListInner = styled.div`
    padding: 12px 0;  
`;
export const Details = styled.div`
    position: fixed; 
    top: 0; left: 0; 
    width: 100%; height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    > div {
      padding: 36px;
      background: #fff;
      width: 80%;
      max-width: 750px; 
      max-height: 80vh;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
    }
`;

export const IconEye = styled.a`
    display:block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='eye' class='svg-inline--fa fa-eye fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'%3E%3C/path%3E%3C/svg%3E");
`;
export const IconList = styled.a`
    display:block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='list-alt' class='svg-inline--fa fa-list-alt fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z'%3E%3C/path%3E%3C/svg%3E");
`;

 



