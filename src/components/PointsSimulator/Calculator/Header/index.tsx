import React, { useState } from 'react';

import { ReactSVG } from 'react-svg';
import listImage from 'assets/images/points-simulator/list.svg';
import { Option } from 'components/shared/Select';

import {
  Container,
  FirstBox,
  SecondBox,
  Tabs,
  Item,
  ChannelSelect,
  ProductTypeSelect,
  CustomText,
} from './styles';

type Tab = 'tab1' | 'tab2';

const Header: React.FC = () => {
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [tabSelected, setTabSelected] = useState<Tab>('tab1');

  return (
    <Container>
      <FirstBox>
        <h3>Simulador</h3>
        <div>
          <span>Simulando em</span>
          <ChannelSelect
            value={channelSelected}
            setValue={setChannelSelected}
          />
          <CustomText>Minhas simulações</CustomText>
          <ReactSVG src={listImage} />
        </div>
      </FirstBox>
      <SecondBox>
        <Tabs>
          <Item
            onClick={() => setTabSelected('tab1')}
            selected={tabSelected === 'tab1'}
          >
            <span>Produtos potencializadores</span>
          </Item>
          <Item
            onClick={() => setTabSelected('tab2')}
            selected={tabSelected === 'tab2'}
          >
            <span>Produtos</span>
          </Item>
        </Tabs>
        <ProductTypeSelect
          value={channelSelected}
          setValue={setChannelSelected}
        />
      </SecondBox>
    </Container>
  );
};

export default Header;
