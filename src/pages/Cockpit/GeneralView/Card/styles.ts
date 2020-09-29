import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 22px 30px 22px;
  width: 100%;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #34ffff;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 20px;
  color: #052346;
`;

export const Item = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: #052346;

  & + span {
    margin-top: 7px;
  }
`;
