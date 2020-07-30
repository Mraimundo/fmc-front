import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 25px;
    line-height: 1;
  }

  > h4 {
    font-size: 24px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 5px;
    margin-left: 25px;
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    margin-top: 6px;
  }

  > p {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.quartenary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed2};
    margin-top: 32px;
    margin-bottom: 23px;
    text-align: justify;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.font.color.secondary};
  text-align: justify;
`;
