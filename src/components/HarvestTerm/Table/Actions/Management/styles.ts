import styled from 'styled-components';
import Button from 'components/shared/Button';

export const Container = styled.div`
  display: flex;
`;

const BaseButton = styled(Button)`
  max-height: 1.5rem;
  max-width: 6rem;
`;

export const ApproveButton = styled(BaseButton)``;

export const RepproveButton = styled(BaseButton)`
  background-color: red;
`;
