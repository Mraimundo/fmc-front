import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 30px;
    margin-bottom: 10px;
  }

  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
    margin-top: 8px;
  }

  > button {
    width: 152px;
    height: 48px;
    align-self: center;
    margin: 30px 0;
    text-transform: uppercase;
    border-radius: 5px;
  }
`;

export const Separator = styled.div`
  width: calc(100% + 90px);
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-45px);
  margin-bottom: 2px;
  margin-top: 3px;
`;
