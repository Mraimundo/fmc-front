import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em 1.5em;
`;

export const ShowCaseWrapper = styled.div`
  background-color: ${({ theme }) => theme.font.color.primary};
`;

export const PerformanceWrapper = styled.div`
  width: 75%;
`;

export const MyPointsWrapper = styled.div`
  width: 25%;
  margin-left: 1em;
`;

export const PerformanceMyPointsWrapper = styled.div`
  display: flex;
`;
