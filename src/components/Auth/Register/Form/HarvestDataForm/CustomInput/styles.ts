import styled from 'styled-components';
import DefaultInput from 'components/shared/Input';

export const Container = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Label = styled.label`
  margin-left: 6px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.quartenary};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 6px;
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }
`;

export const Input = styled(DefaultInput)`
  max-width: 178px;

  ._inputContainer {
    height: 40px;
  }
`;

export const ExtraInput = styled(Input)`
  max-width: 120px;
  margin-left: 10px;
`;
