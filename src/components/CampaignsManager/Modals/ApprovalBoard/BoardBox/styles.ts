import styled, { css } from 'styled-components';
import { ApprovalStatus } from 'services/campaigns-manager/interfaces/Campaign';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 598px;
  padding: 17px 20px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
`;

interface RowProps {
  myline: boolean;
  status: ApprovalStatus;
}
export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 8px 0;

  &:last-child {
    border: none;
  }

  > h5 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    flex: 1;
  }

  ${({ myline, theme }) =>
    myline &&
    css`
      background: #efefef;
    `};

  ${({ status }) => status === 'approved' && css``};
`;

interface IconProps {
  myline?: boolean;
}
export const Icon = styled.span<IconProps>`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.font.color.quartenary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  ${({ myline, theme }) =>
    myline &&
    css`
      color: ${theme.font.color.secondary};
      svg path {
        fill: ${theme.font.color.secondary};
      }
    `};
`;

export const CommentIconContainer = styled(Icon)`
  ${({ myline }) =>
    myline &&
    css`
      text-decoration: underline;
    `};
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
  ${({ myline }) =>
    !myline &&
    css`
      cursor: auto;
    `};
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
    `};
  ${({ myline }) =>
    !myline &&
    css`
      cursor: auto;
    `};
`;
