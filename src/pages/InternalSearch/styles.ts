import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 40px auto;
  h1 {
    font-size: 24px;
    color: #3B302A;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15px; 
  }
  hr {
    height: 1px;
    background-color: #808285;
    margin-bottom: 35px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

export const Content = styled.div`
  margin-bottom: 25px;
  h2 {
    width: 313px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 24px; 
    font-size: 21px;
    color: #65554D;
    margin-bottom: 5px;
  }
  p {
    width: 313px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #000;
    margin-bottom: 15px;
  }
  span {
    color: #65554D;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const MiniBox = styled.div`
  
`;

export const ContentInfo = styled.div`
  img {
    width: 100%;
    max-width: 1004;
    height: 239px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #3B302A;  
  line-height: 28px;
  margin-bottom: 20px;
`;

export const FormControlRadio = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      color: #000;
      margin-bottom: 25px;
    }
`;

export const RadioGroup = styled.div`
  > div {
    margin-top: 15px;
    span {
      font-size: 16px;
      color: #65554D;
    }
    strong {
      margin-right: 30px;
      input {
        width: 15px;
        height: 15px;
      }
      input[type="radio"]:checked {
        width: 12px;
        height: 12px;
        background: #65554D;
      }
    }
  }
  
`;

export const FormGrupSelect = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      color: #000;
      margin-bottom: 25px;
    }
    input {
    }
    option,
    select {
      padding: 0 10px;
      width: 299px;
      height: 40px;
    }
`;

export const FormControlBanner = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
  p {
    font-size: 14px;
    color: #000;
    margin-bottom: 23px;

  }
  .banner {
      height: 139px;
      background: #EFEFEF;
    } 
`;

export const FormControlData = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      color: #000;
    }
`;

export const KeyboardDate = styled.div`
  margin-top: 30px;
    input {
      width: 174px;
      height: 40px;
      color: #3B302A;
      padding: 0 10px;
    }  
`;

export const FormControlHour = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      color: #000;
      margin-bottom: 25px;
    }
`;

export const KeyboardTime = styled.div`
  margin-top: 30px;
    input {
      width: 174px;
      height: 40px;
      padding: 0 10px;
      color: #3B302A;
    }  
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 265px;
  height: 36px;
  margin: 0 auto;
  background: #65554D;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
`;



