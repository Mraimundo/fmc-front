import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .card__description {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .card__description .card {
    background: #EFEFEF;
    height: 384px;
  }

  .card__description .card .card-image {
    width: 100%;
    height: 175px;
    padding: 12px;
  }

  .card__description .card .card-image img {
    width: 100%;
    height: 100%;
  }

  .card__description .card .body-card {
    padding: 12px;
  }

  .card__description .card .body-card h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #65554D;
    margin-bottom: 8px;
  }

  .card__description .card .body-card span {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000;
    margin-bottom: 12px;
  }

  .card__description .card .body-card p {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #000;
    margin-bottom: 5px;
  }

  .card__description .card .body-card h2{
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #65554D;
    margin-bottom: 5px;
  }

  .card__description .card .body-card button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    padding: 10px 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    background: #65554D;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
  }
`;


