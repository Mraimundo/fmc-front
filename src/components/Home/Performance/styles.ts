import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 13%);
  display: flex;
`;

export const ProgressWrapper = styled.div`
  display: flex;
`;

export const Label = styled.h3`
  color: #000000;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1em;
  text-align: center;
  margin: 0.5em 0 1em 0;
`;

export const IndividualProgressWrapper = styled.div`
  margin: 1em;
  width: 170px;
`;
