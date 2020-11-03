import styled from 'styled-components';

export const Container = styled.div``;

export const CustomSimulateContent = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const CustomAcumulateContent = styled(CustomSimulateContent)`
  color: #000;
`;

export const TitleBox = styled.div`
  display: flex;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 14px;
    color: ${({ theme }) => theme.font.color.primary};
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.font.color.primary};
    margin-left: 12px;
  }
`;

export const CustomAcumulateBox = styled.div`
  margin-top: 10px;
  display: flex;

  > div {
    & + div {
      margin-left: 15px;
    }
  }
`;

export const CustomSimuteBox = styled(CustomAcumulateBox)`
  margin-top: 10px;
  > div {
    background: #f8d3d1;
  }
`;

export const CustomIndicatorContainer = styled.div`
  margin-top: 36px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  max-width: 1030px;
  margin-top: 11px;
  display: grid;
  grid-column-gap: 13px;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
`;
