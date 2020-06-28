import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  @media screen and (max-width: 720px) {
    position: relative;
    margin-top: 30px;
    margin-left: auto;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.contact.ballon.backgroundColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 40px;
    font-weight: bolder;
  }

  transition: transform 150ms ease;
  will-change: transform;
  @keyframes move {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  &:hover {
    animation: move 200ms ease infinite alternate;
  }
`;
