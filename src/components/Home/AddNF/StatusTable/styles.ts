import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 22px;
  border-radius: 10px;
  background: #f4f4f3;
  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  margin-top: 10px;

  @media (min-width: 768px) {
    min-width: 50%;
    margin-right: 40px;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 8px auto;
  }

  p {
    flex-shrink: 0;
  }

  span {
    height: 1px;
    flex: 1 1 100%;
    border-bottom: 1px dotted;
    align-self: flex-end;
  }
`;
