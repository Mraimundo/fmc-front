import styled from 'styled-components';
import DefaultCustomersSelect from 'components/CampaignsManager/Selects/Audience';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  > input[type='text'] {
    width: 100%;
    max-width: 435px;
    height: 44px;
    padding: 0 15px;
  }

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    margin-bottom: 8px;
  }

  > span {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    margin-bottom: 2px;
    margin-top: 25px;
  }

  > textarea {
    resize: none;
    width: 100%;
    max-width: 435px;
    height: 132px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.font.color.quartenary};
    margin-bottom: 35px;
  }
`;

export const CustomersSelect = styled(DefaultCustomersSelect)`
  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
  }
  margin-bottom: 6px;
`;

export const CostumerDetails = styled.div`
  width: 100%;
  max-width: 586px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 12px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  > h4 {
    flex: 1;
    text-align: right;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    padding-right: 30px;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  width: 100%;
  max-width: 586px;

  > button {
    width: 232px;
    height: 48px;
    text-transform: uppercase;
  }
`;
