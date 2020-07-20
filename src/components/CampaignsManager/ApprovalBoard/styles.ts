import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 532px;
  padding: 2px 12px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0;

  &:last-child {
    border: none;
  }

  > h5 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    flex: 1;
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.quartenary};
    display: flex;
    align-items: center;
    margin-right: 20px;

    svg {
      margin-right: 8px;
    }
  }
`;
