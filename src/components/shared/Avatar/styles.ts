import styled, { css } from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

interface ContainerProps {
  avatarSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  img {
    width: 171px;
    object-fit: cover;

    ${({ avatarSelected }) =>
      avatarSelected &&
      css`
        border-radius: 50%;
        height: 171px;
      `}
  }

  input {
    display: none;
  }
`;

export const Button = styled(DefaultButton)`
  height: 40px;
  width: 200px;
`;
