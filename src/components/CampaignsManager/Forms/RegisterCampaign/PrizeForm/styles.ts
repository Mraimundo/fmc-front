import styled from 'styled-components';
import DefaultInput from 'components/shared/Input/BaseInput';
import DefaultTextArea from 'components/shared/TextArea/BaseTextArea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 5px 0;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  > h4 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.font.color.primary};
    padding-top: 15px;
    padding-left: 10px;
  }

  > span {
    flex: 1;
    text-align: right;
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    padding-right: 30px;
    padding-top: 15px;
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
    max-width: 586px;
    margin-top: 12px;
    text-align: justify;
  }
`;

export const Input = styled(DefaultInput)`
  ._inputContainer {
    width: 100%;
    max-width: 586px;
    height: 44px;
  }
`;

export const TextArea = styled(DefaultTextArea)`
  margin-top: 12px;
  ._inputContainer {
    width: 100%;
    max-width: 586px;
    height: 95px;
  }
`;
