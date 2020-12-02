import styled from 'styled-components';
import { Accordion as DefaultAccordion } from 'components/shared';

interface ContainerProps {
  type: 'primary' | 'secondary';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-size: cover;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 997px;
  background-color: #fff;
  padding: 33px 46px;
  flex: 1;

  ol {
    list-style-position: inside;
  }
`;

export const LinksRegulation = styled.div`
  margin-top: 30px;
  > div {
    margin-top: 10px;
  }
  a {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;

    &.icon-download {
      display: inline-block;
      margin-left: 16px;
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-image: url("data:image/svg+xml,%0A%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='download' class='svg-inline--fa fa-download fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%233B302A' d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'%3E%3C/path%3E%3C/svg%3E");
    }
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.primary};
  margin-left: 35px;
`;

export const SubTitle = styled.h3`
  margin-top: 35px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.font.color.primary};

  @media screen and (max-width: 720px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Accordion = styled(DefaultAccordion)`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const ContentRegulation = styled.div`
  border: 1px solid ${({ theme }) => theme.regulation.primary.borderColor};
  overflow-y: auto;
  margin-left: 109px;
  transform: translateY(-7px) translateX(1px);
  padding: 10px;

  ul {
    margin-left: 25px;
  }

  @media screen and (max-width: 720px) {
    margin-left: 0;
    border-left: none;
    font-size: 14px;
    transform: translateY(0);
    border-right: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  > button {
    width: 137px;
    height: 36px;
    margin-bottom: 15px;
    & + button {
      margin-left: 25px;
    }
  }
`;

export const PrintRef = styled.div`
  @media print {
    margin: 50px;
    color: #000;
  }
`;
