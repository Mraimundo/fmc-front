import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 40px;
  }

  > textarea {
    width: 100%;
    max-width: 435px;
    height: 132px;
    resize: none;
  }

  > button {
    width: 232px;
    height: 48px;
    align-self: center;
    margin: 40px 0;
    text-transform: uppercase;
  }
`;
