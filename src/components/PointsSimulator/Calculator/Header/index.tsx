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

export enum Tab {
  enhancerProductsTab = 'Produtos potencializadores',
  participateProductsTab = 'Produtos',
}

interface Header {
  tabSelected: Tab;
  setTabSelected(tab: Tab): void;
}

const Header: React.FC<Header> = ({ tabSelected, setTabSelected }) => {
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);

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
            onClick={() => setTabSelected(Tab.enhancerProductsTab)}
            selected={tabSelected === Tab.enhancerProductsTab}
          >
            <span>Produtos potencializadores</span>
          </Item>
          <Item
            onClick={() => setTabSelected(Tab.participateProductsTab)}
            selected={tabSelected === Tab.participateProductsTab}
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
