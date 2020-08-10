import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
  }

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-top: 12px;
  }

  > button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 15px;

    svg {
      margin-right: 8px;
      width: 27px;
      height: 30px;
      transition: transform 0.2s;
      path {
        fill: ${({ theme }) => theme.font.color.primary};
      }
    }

    transition: transform 0.2s;
    will-change: transform;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 3px;
`;
