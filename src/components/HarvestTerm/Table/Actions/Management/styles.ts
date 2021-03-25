import styled from 'styled-components';
import Button from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BaseButton = styled(Button)`
  max-height: 1.4rem;
  max-width: 6rem;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  margin-right: 5px;
`;

export const ApproveButton = styled(BaseButton)``;

export const ReproveButton = styled(BaseButton)``;
