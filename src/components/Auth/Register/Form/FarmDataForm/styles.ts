import styled from 'styled-components';
import DefaultBaseInput from 'components/shared/Input/BaseInput';
import {
  Button as DefaultButton,
  Input as DefaultInput,
} from 'components/shared';
import DefaultUfSelect from '../Selects/UfsBaseSelect';
import DefaultMemberTypeSelect from '../Selects/MemberTypeSelect';

export const BaseInput = styled(DefaultBaseInput)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const Input = styled(DefaultInput)`
  margin-top: 15px;
  max-width: 499px;

  ._inputContainer {
    height: 40px;
  }
`;

export const Obs = styled.p`
  font-size: 18px;
  color: #e63027;
  margin: 30px 0;
`;

export const MemberActionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 648px;
  margin: 48px 0;
`;

export const AddMemberButton = styled.button`
  background: #193b4e;
  color: #fff;
  font-size: 21px;
  max-width: 390px;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  border: 0;
`;

export const Button = styled(DefaultButton)`
  margin-top: 15px;
  max-width: 179px;
  height: 44px;
  margin: 40px 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const NextButton = styled(Button)`
  width: 100%;
  max-width: 425px;
  height: 48px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 18px;

  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const ListContainer = styled.div`
  margin: 32px auto;
  color: #808285;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  th {
    padding: 3px 8px;
    font-weight: normal;
    text-align: left;
  }
  td {
    padding: 20px 8px;
  }
  tr:nth-child(odd) {
    td {
      background: #efefef;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;

  > span {
    margin-right: 10px;

    & + span {
      padding-left: 10px;
      border-left: 1px solid rgba(0, 0, 0, 0.4);
    }
  }
`;

export const CustomLink = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  text-decoration: underline;
  cursor: pointer;
`;

export const MemberTypeSelect = styled(DefaultMemberTypeSelect)`
  ._inputContainer {
    max-width: 221px;
    height: 40px;
  }
`;

export const UfSelect = styled(DefaultUfSelect)`
  margin-top: 16px;
  ._inputContainer {
    max-width: 100px;
    height: 40px;
  }
`;

export const BoxAccept = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  text-align: justify;

  > input {
    cursor: pointer;
  }

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: #808285;
    font-size: 16px;
    margin-left: 8px;

    a {
      color: ${({ theme }) => theme.font.color.primary};
    }
  }

  @media screen and (max-width: 500px) {
    > span {
      font-size: 12px;
    }
  }
`;
