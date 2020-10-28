import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  Container,
  WelcomeMessageContainer,
  Navigation,
  NavigationItem,
} from './styles';

export type Tab =
  | 'PERSONAL_DATA'
  | 'FARM_DATA'
  | 'HARVEST_DATA'
  | 'SECURITY_DATA';

interface Props {
  activeTab: Tab;
  setActiveTab(tab: Tab): void;
}

const personalDataFields = [
  'picture',
  'nick_name',
  'name',
  'email',
  'cpf',
  'area_code',
  'cell_phone',
  'producer_cpf',
  'formatted_birth_date',
  'gender_select',
  'formatted_birth_date',
  'education_level_select',
  'place_of_birth',
  'nationality',
  'marital_status_select',
  'rg',
  'rg_emitter',
  'rg_emitter_uf_select',
  'pis_nis',
  'role.name',
];

const farmDataFields = ['producer_group_name'];

const securityDataFields = ['password', 'password_confirmation'];

const Header: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [errorsInTab, setErrorsInTab] = useState<Tab[]>([]);
  const { errors } = useFormContext();

  useEffect(() => {
    const tmpErrors: Tab[] = [];

    const hasErrorsInPersonalDataForm =
      Object.keys(errors).filter(key => personalDataFields.includes(key))
        .length > 0;

    const hasErrorsInFarmDataForm =
      Object.keys(errors).filter(key => farmDataFields.includes(key)).length >
      0;

    const hasErrorsInSecurityDataForm =
      Object.keys(errors).filter(key => securityDataFields.includes(key))
        .length > 0;

    if (hasErrorsInPersonalDataForm) tmpErrors.push('PERSONAL_DATA');
    if (hasErrorsInFarmDataForm) tmpErrors.push('FARM_DATA');
    if (hasErrorsInSecurityDataForm) tmpErrors.push('SECURITY_DATA');

    setErrorsInTab(tmpErrors);
  }, [errors]);

  return (
    <Container>
      <WelcomeMessageContainer>
        <p>
          É uma satisfação recebê-lo no JUNTOS FMC, programa criado
          especialmente para fortalecer laços de valor entre a FMC e seus
          clientes.
        </p>

        <p>
          O JUNTOS FMC foi desenhado especialmente para produtores que dão
          preferência aos nossos produtos, adquiridos pelos canais cadastrados
          no programa.
        </p>

        <p>
          Entregando serviços e bens para produção, contribuímos para a
          capacitação das pessoas e para o desenvolvimento do seu negócio,
          tornando a agricultura nacional muito mais desenvolvida e produtiva.
        </p>

        <p>
          Para converter suas notas fiscais em pontos e realizar resgates no
          catálogo de benefícios, pedimos que, por favor, preencha todos os
          campos abaixo.
        </p>
      </WelcomeMessageContainer>
      <Navigation>
        <NavigationItem
          onClick={() => setActiveTab('PERSONAL_DATA')}
          className={activeTab === 'PERSONAL_DATA' ? 'isCurrent' : ''}
          haserrors={errorsInTab.includes('PERSONAL_DATA') ? 1 : 0}
        >
          Pessoa física
        </NavigationItem>
        <NavigationItem
          onClick={() => setActiveTab('FARM_DATA')}
          className={activeTab === 'FARM_DATA' ? 'isCurrent' : ''}
          haserrors={errorsInTab.includes('FARM_DATA') ? 1 : 0}
        >
          Dados da minha fazenda e/ou CNPJ*
        </NavigationItem>
        <NavigationItem
          onClick={() => setActiveTab('HARVEST_DATA')}
          className={activeTab === 'HARVEST_DATA' ? 'isCurrent' : ''}
          haserrors={errorsInTab.includes('HARVEST_DATA') ? 1 : 0}
        >
          Dados da área de cultivo
        </NavigationItem>
        <NavigationItem
          onClick={() => setActiveTab('SECURITY_DATA')}
          className={activeTab === 'SECURITY_DATA' ? 'isCurrent' : ''}
          haserrors={errorsInTab.includes('SECURITY_DATA') ? 1 : 0}
        >
          Segurança
        </NavigationItem>
      </Navigation>
    </Container>
  );
};

export default Header;
