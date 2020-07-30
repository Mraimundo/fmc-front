import styled from 'styled-components';

export const SubsidiariesParticipantWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const SubsidiariesWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1.5em;
`;

export const RolesListWrapper = styled.div`
  margin-top: 1.5em;
`;
