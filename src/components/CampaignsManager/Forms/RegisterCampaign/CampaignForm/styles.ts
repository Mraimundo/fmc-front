import styled, { css } from 'styled-components';
import { opacify } from 'polished';
import DefaultMechanicsSelect from 'components/CampaignsManager/Selects/Mechanics';
import DefaultCustomersSelect from 'components/CampaignsManager/Selects/Audience';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
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

  ._inputContainer {
    width: 100%;
    max-width: 435px;
    height: 44px;
    padding: 0 15px;
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

export const CostumersContainer = styled.div`
  max-height: 250px;
  overflow: auto;
  max-width: 620px;
  padding-top: 0px;
  margin-top: 12px;
`;

export const CostumerDetails = styled.div`
  width: 100%;
  max-width: 586px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.font.color.quartenary};
  display: flex;
  align-items: center;
  padding: 0 16px;

  svg {
    cursor: pointer;
  }

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

  & + div {
    margin-top: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 4px;
`;

interface ButtonProps {
  loading: boolean;
}

export const Button = styled.button<ButtonProps>`
  text-transform: uppercase;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 11px;
  height: 32px;
  border-radius: 7px;
  min-width: 136px;
  padding: 0 18px;
  border: 1px dashed ${({ theme }) => opacify(0.5, theme.font.color.primary)};
  position: relative;

  background: transparent;
  & + button {
    margin-left: 8px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;

    ${({ loading }) =>
      loading &&
      css`
        &:after {
          content: 'Aguarde...';
          position: absolute;
          left: 50%;
          top: 32px;
          transform: translateX(-50%);
          font-size: 11px;
          opacity: 0.7;
        }
      `}
  }
`;
