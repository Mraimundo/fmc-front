import styled from 'styled-components';
import ParticipantBox from 'components/ShowCase/ParticipantInfo';

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ParticipantInfo = styled(ParticipantBox)`
  margin-right: 10px;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    margin-bottom: 8px;
  }

  @media screen and (max-width: 720px) {
    margin-top: 25px;
    width: 100%;

    > h3 {
      align-self: center;
    }
  }
`;
