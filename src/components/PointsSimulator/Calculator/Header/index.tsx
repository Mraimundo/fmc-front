import React, { useEffect, useState } from 'react';

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
  setProductTypeIdSelected(productTypeId: number | undefined): void;
}

const Header: React.FC<Header> = props => {
  const { tabSelected, setTabSelected, setProductTypeIdSelected } = props;

  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [productTypeSelected, setProductTypeSelected] = useState<Option | null>(
    null,
  );

  useEffect(() => {
    const productTypeId = productTypeSelected
      ? parseInt(productTypeSelected.value, 0)
      : undefined;
    setProductTypeIdSelected(productTypeId);
  }, [productTypeSelected, setProductTypeIdSelected]);

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
          value={productTypeSelected}
          setValue={setProductTypeSelected}
          placeholder="Tipo de produto"
        />
      </SecondBox>
    </Container>
  );
};

export default Header;
