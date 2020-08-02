import styled, { css } from 'styled-components';

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
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    flex: 1;
  }
`;

export const Icon = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.font.color.quartenary};

  svg {
    margin-right: 8px;
  }
`;

interface ApprovedProps {
  approved: boolean;
}
export const ApprovedIconContainer = styled(Icon)<ApprovedProps>`
  ${({ approved }) =>
    approved &&
    css`
      color: green;
      svg path {
        fill: green;
      }
    `}
`;

interface DisapprovedProps {
  disapproved: boolean;
}
export const DisapprovedIconContainer = styled(Icon)<DisapprovedProps>`
  ${({ disapproved }) =>
    disapproved &&
    css`
      color: red;
      svg path {
        fill: red;
      }
    `}
`;
