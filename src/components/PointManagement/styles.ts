import styled from 'styled-components';
import Button from 'components/shared/Button';

export const WrapperPoints = styled.div`
  display: flex;
  justify-content: center;

  display: grid;
  grid-column-gap: 3em;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const RescueResaleCooperativeButton = styled(Button)`
  width: fit-content;
  height: 50px;
  margin: 2em auto 1em auto;
`;
