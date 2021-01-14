import React, { useEffect, useState } from 'react';

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
  ReactSVG,
} from './styles';

export enum Tab {
  enhancerProductsTab = 'Produtos potencializadores',
  participateProductsTab = 'Produtos',
}

interface Props {
  tabSelected: Tab;
  setTabSelected(tab: Tab): void;
  setProductTypeIdSelected(productTypeId: number | undefined): void;
  /* setChannelIdSelected(channelId: number): void; */
  handleLoadSimulationClick(): void;
  channelSelected: Option | null;
  setChannelSelected(option: Option | null): void;
}

const Header: React.FC<Props> = ({
  tabSelected,
  setTabSelected,
  setProductTypeIdSelected,
  // setChannelIdSelected,
  handleLoadSimulationClick,
  channelSelected,
  setChannelSelected,
}) => {
  const [productTypeSelected, setProductTypeSelected] = useState<Option | null>(
    null,
  );

  useEffect(() => {
    const productTypeId = productTypeSelected
      ? parseInt(productTypeSelected.value, 0)
      : undefined;
    setProductTypeIdSelected(productTypeId);
  }, [productTypeSelected, setProductTypeIdSelected]);

  /* useEffect(() => {
    if (!channelSelected) return;
    const channelSelectedId = parseInt(channelSelected.value, 0);
    setChannelIdSelected(channelSelectedId);
  }, [channelSelected, setChannelIdSelected]); */

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
          <ReactSVG src={listImage} onClick={handleLoadSimulationClick} />
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
