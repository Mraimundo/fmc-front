import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 21px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 25px;
  }

  > h4 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 5px;
    margin-left: 25px;
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.secondary};
  }

  > p {
    font-size: 18px;
    color: ${({ theme }) => theme.font.color.secondary};
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.7;
    text-align: justify;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.font.color.secondary};
  text-align: justify;
`;
