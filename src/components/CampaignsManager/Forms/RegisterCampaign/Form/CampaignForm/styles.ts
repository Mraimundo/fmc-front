import styled from 'styled-components';
import DefaultMechanicsSelect from 'components/CampaignsManager/Selects/Mechanics';
import DefaultCustomersSelect from 'components/CampaignsManager/Selects/Audience';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    font-weight: bold;
    color: ${({ theme }) => theme.font.color.primary};
    margin-top: 30px;
    margin-bottom: 10px;
  }

  > input[type='text'] {
    width: 100%;
    max-width: 435px;
    height: 44px;
    padding: 0 15px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }
`;

export const MechanicsSelect = styled(DefaultMechanicsSelect)`
  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
  }
`;

export const CustomersSelect = styled(DefaultCustomersSelect)`
  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
    margin-bottom: 4px;
  }
`;

export const Box = styled.div`
  display: flex;
  > div {
    width: 194px;
    & + div {
      margin-left: 15px;
    }
  }
  ._inputContainer {
    width: 194px;
    height: 44px;
  }
`;

export const CostumerDetails = styled.div`
  width: 100%;
  max-width: 586px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-top: 10px;

  svg {
    cursor: pointer;
  }

  > h3 {
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.quartenary};
  }

  > h4 {
    flex: 1;
    text-align: right;
    font-weight: bold;
    font-size: 16px;
    color: ${({ theme }) => theme.font.color.primary};
    padding-right: 30px;
  }
`;
