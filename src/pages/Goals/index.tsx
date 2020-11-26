import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';

import {
  PerformanceTabContent,
  Top10ProductsTabContent,
} from 'components/Goals';
import { Tabs } from 'state/modules/goals/constants';
import {
  getCampaigns,
  getBillingPog,
  getPotentializers,
  getTopPurchasingProducts,
  getTopSellingProducts,
  getInfos,
} from 'state/modules/goals/selectors';
import {
  fetchCampaigns,
  fetchBillingPog,
  fetchPotentializers,
  fetchInfos,
  fetchTopPurchasingProducts,
  fetchTopSellingProducts,
} from 'state/modules/goals/actions';
import { Wrapper, TabWrapper, TabsList, Tab, CampaignsList } from './styles';

const Goals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Performance);

  const [
    campaigns,
    billingPog,
    purchasingProducts,
    sellingProducts,
    potentializers,
    infos,
  ] = [
    useSelector(getCampaigns),
    useSelector(getBillingPog),
    useSelector(getTopPurchasingProducts),
    useSelector(getTopSellingProducts),
    useSelector(getPotentializers),
    useSelector(getInfos),
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  useEffect(() => {
    if (activeTab === Tabs.Performance) {
      dispatch(fetchBillingPog());
      dispatch(fetchPotentializers());
      dispatch(fetchInfos());
      return;
    }

    dispatch(fetchTopPurchasingProducts());
    dispatch(fetchTopSellingProducts());
  }, [dispatch, activeTab]);

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Wrapper>
        {!!campaigns && (
          <CampaignsList>
            {campaigns
              .filter(item => item.title !== 'Safra 19/20')
              .map(campaign => (
                <li key={campaign.title}>{`Safra ${campaign.title}`}</li>
              ))}
          </CampaignsList>
        )}
        <TabWrapper>
          <TabsList>
            <Tab
              onClick={() => setActiveTab(Tabs.Performance)}
              active={activeTab === Tabs.Performance}
            >
              <span>PERFORMANCE</span>
            </Tab>
            <Tab
              onClick={() => setActiveTab(Tabs.Top10Products)}
              active={activeTab === Tabs.Top10Products}
            >
              <span>TOP 10 PRODUTOS</span>
            </Tab>
          </TabsList>
          {activeTab === Tabs.Performance && (
            <PerformanceTabContent
              billingPog={billingPog}
              potentializers={potentializers}
              infos={infos}
            />
          )}
          {activeTab === Tabs.Top10Products && (
            <Top10ProductsTabContent
              purchasingProducts={purchasingProducts}
              sellingProducts={sellingProducts}
            />
          )}
        </TabWrapper>
      </Wrapper>
    </Container>
  );
};

export default Goals;
