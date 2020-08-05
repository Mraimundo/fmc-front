import styled from 'styled-components';
import DefaultModal from 'components/shared/Modal';

import { FONTS } from 'styles/font/globals';

export const Modal = styled(DefaultModal)`
  ._modalContainer {
    padding: 4em 4em 1em 4em;
    max-width: 600px;
    width: 100%;
    height: auto;
    max-height: 600px;
  }
`;

export const WrapperText = styled.div`
  margin-bottom: 2em;
`;

export const Text = styled.h3`
  font-family: ${FONTS.medium};
  text-align: center;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 1em;
  }
`;
