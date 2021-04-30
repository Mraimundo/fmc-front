import styled from 'styled-components';
import BaseInput from 'components/shared/Input/BaseInput';
import DefaultAvatar from 'components/Avatar';

export const Input = styled(BaseInput)`
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 499px;

  /*@media screen and (max-width: 1368px) {*/
  ._inputContainer {
    height: 40px;
  }
  /*}*/
`;

export const StateCodeInput = styled(Input)`
  ._inputContainer {
    width: 120px;
  }
`;

export const BoxPhone = styled.div`
  display: flex;
  max-width: 499px;
  > div {
    justify-content: flex-end;
    width: 117px;
    margin-right: 20px;
    & + div {
      margin-right: 0;
      width: 100%;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
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

export const Title = styled.h3`
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 18px;

  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Avatar = styled(DefaultAvatar)`
  /* div {
    font-size: 3em;
  }*/
`;
