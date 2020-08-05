import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.font.color.primary};
  align-items: center;
  font-size: 0.8em;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
`;

export const StyledLoader = styled(Loader)`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: ${({ theme }) => theme.font.color.primary};
`;
