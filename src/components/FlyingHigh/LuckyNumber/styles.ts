import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 500px;
  min-height: 100px;
  background: linear-gradient(132deg, rgba(239,239,239,1) 0%, rgba(254,254,255,1) 50%, rgba(239,239,239,1) 100%);
  padding: 2em;
  margin: 2rem;
  border-radius: 8px;
  color: #3B302A;
  * {
    margin-bottom: 0.5em;
  }
`;
