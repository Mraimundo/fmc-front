import styled from 'styled-components';
import ParticipantBox from 'components/ShowCase/ParticipantInfo';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ParticipantInfo = styled(ParticipantBox)`
  margin-right: 10px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 8px;
  }
`;
