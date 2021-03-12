import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;


export const GridCheckBoxContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 16px;
      color: #000;
    }
`;

export const CheckBoxContentGroup = styled.div`
  width: 40%;
  margin-top: 25px;

  > div {
    display: flex;
    align-items:center;
    justify-content: space-between;
    color: #65554D;

    label{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 50px;

      transform: translateY(25px);
      
      span {
      width: 207px;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: Regular;
      line-height: 24px;
    }
    } 
    .input-group{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 60px;

    }
    .children-one{
      margin-right: 50px;
      div{
        text-align: center;
        margin-top: 20px;
      }
    }
    .children-two {
      div{
        text-align: center;
        margin-top: 20px;
      }
    }
    .children-tree {
      margin-left: 50px;

      div{
        text-align: center;
        margin-top: 20px;
      }
    }

    .children-for {
      margin-left: 50px;

      div{
        text-align: center;
        margin-top: 20px;
      }
    }
     
    
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;



