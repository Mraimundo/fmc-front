import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #193b4e;
  align-items: center;
  font-size: 0.8em;
  font-family: ${FONTS.medium};
`;

export const StyledLoader = styled(Loader)`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
