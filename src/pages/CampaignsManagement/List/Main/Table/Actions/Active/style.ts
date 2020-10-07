import styled from 'styled-components';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 5px;

  svg {
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1);
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export const StyledLoader = styled(Loader)`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: ${({ theme }) => theme.font.color.primary};

  svg {
    fill: ${({ theme }) => theme.font.color.primary};
  }
`;
