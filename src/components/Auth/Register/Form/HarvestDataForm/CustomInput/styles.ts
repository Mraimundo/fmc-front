import styled from 'styled-components';
import DefaultInput from 'components/shared/Input';

export const Container = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-left: 6px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.quartenary};
`;

export const Box = styled.div`
  > span {
    margin-left: 6px;
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  max-width: 178px;

  ._inputContainer {
    height: 40px;
  }
`;
