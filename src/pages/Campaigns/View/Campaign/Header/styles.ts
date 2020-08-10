import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    max-width: 991px;
    object-fit: cover;
  }

  > h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    margin-top: 22px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    font-size: 16px;
    margin-top: 10px;
  }

  > p {
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    font-size: 14px;
    margin-top: 20px;
  }
`;
