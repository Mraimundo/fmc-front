import styled from 'styled-components';
import background from 'assets/images/background.svg';
import backgroundHeader from 'assets/images/background-header.svg';
import { Accordion as DefaultAccordion } from 'components/shared';

interface ContainerProps {
  type: 'primary' | 'secondary';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url(${background});
  background-size: cover;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;

  /*&::-webkit-scrollbar-track {
    background-color: {({ theme, type }) =>
      theme.regulation[type].scrollBarBackgroundColor};
  }
  padding-right: 12px;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: {({ theme, type }) =>
      theme.regulation[type].scrollBarColor};
  }*/
`;

export const Content = styled.div`
  width: 100%;
  max-width: 997px;
  background-color: #fff;
  padding: 33px 46px;
  flex: 1;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.font.color.quartenary};
`;

export const SubTitle = styled.h3`
  margin-top: 35px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.font.color.primary};
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

export const Header = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundHeader});
  > img {
    width: 364px;
  }
`;
