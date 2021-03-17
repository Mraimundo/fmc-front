import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 40px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

  p {
      font-size: 16px;
      color: #000;
    }

  legend {
    margin-left: 30px;
  }
 
  fieldset {
    display: inline-flex;
    height: 0.1rem;
    align-items: flex-end;
    width: 4rem;
    -webkit-appearance: none;
    margin-top: 22px;

    width: 300px;
    justify-content: flex-end;
    color: black;
  }
`;

