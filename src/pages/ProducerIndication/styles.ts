import styled from 'styled-components';

export const Header = styled.div`
  height: 145px;
  width: 100%;
  background: black;
`;

export const Footer = styled.div`
  height: 234px;
  width: 100%;
  background: orange;
`;

export const Container = styled.div`
  max-width: 1027px;
  margin: 40px auto;

  .nominated .participants-info {
    margin-left: 50px;
  }

  .nominated .participants-info h3{
    font-size: 18px;
    font-family: 'Helvetica Neue', sans-serif;
    color: #193B4E;
    margin-bottom: 8px;
  }

  .nominated .participants-info h4 {
    font-size: 16px;
    font-family: 'Helvetica Neue', sans-serif;
    color: #193B4E;
    margin-bottom: 20px;
  }

  .nominated table {
      width: 90%;
      margin: 0 auto;
      border-collapse: separate;
      border-spacing: 0 5px;

      th {
        height: 29px;
        padding: 0 25px;
      }

      td {
        height: 29px;
        padding: 0 25px;
      }

      thead {
        text-align: left;
        background: #193B4E;
        color: #fff;
      }

      tbody {
        background: #efefef;
        color: #000;
      }
    }
  }
`;
