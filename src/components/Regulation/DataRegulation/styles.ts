import styled from 'styled-components';
import { shade } from 'polished';
import { Button as DefaultButton } from 'components/shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: stretch;
  padding: 20px 20px 50px 20px;
`;

interface RegulationProps {
  type: 'primary' | 'secondary';
}
export const RegulationContent = styled.div<RegulationProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  flex: 1;
  background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 50px 0 0 90px;
  overflow-y: auto;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.quartenary};
    font-size: 18px;
  }

  > div {
    width: 100%;
    flex: 1;
    background: ${({ theme, type }) => theme.regulation[type].backgroundColor};
    color: ${({ theme, type }) => theme.regulation[type].fontColor};
    overflow-y: auto;
    padding: 30px 90px 50px 0;
  }
`;

export const Button = styled(DefaultButton)`
  width: 100%;
  max-width: 617px;
  margin-top: 30px;
  height: 45px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
`;

export const BoxActions = styled.div`
  display: flex;
  margin-top: 24px;

  > button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    opacity: 1;
    font-size: 14px;

    img {
      margin-right: 8px;
      width: 27px;
      height: 30px;
      transition: transform 0.2s;
    }

    & + button {
      margin-left: 20px;
    }

    transition: transform 0.2s;
    will-change: opacity, transform;
    &:hover {
     /* color: ${({ theme }) => shade(0.2, theme.link.fontColor)};*/
     img {
       transform: scale(1.1);
     }
    }
  }
`;

export const PrintRef = styled.div`
  @media print {
    margin: 50px;
    color: #000;
  }
`;
