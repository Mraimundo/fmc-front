import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

  p {
     margin-bottom: 15px;
      font-size: 16px;
      color: #000;
    }
 
  fieldset {
    display: inline-flex;
    height: 1rem;
    align-items: flex-end;
    width: 4rem;
    -webkit-appearance: none;
    width: 300px;
    justify-content: flex-end;
    color: black;
  }
`;

