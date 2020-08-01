import React, { useState } from 'react';
import { Extract as IExtract } from 'services/extract/interfaces';
import { Container, Header, Content } from './styles';

interface Props {
  campaignExtract: IExtract;
}

const AccordionItem: React.FC<Props> = ({ campaignExtract }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { statement } = campaignExtract;
  const [currentExtract] = statement;

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Header onClick={handleClick}>
        <div>
          Safra
          <div>{currentExtract.campaign.title}</div>
        </div>
        <div className="divider" />
        <div>
          <div className="text-right">Total</div>
          <div>{currentExtract.campaign.total} mil pontos</div>
        </div>
        <div className={`chevron ${isOpen ? 'open' : ''}`} />
      </Header>
      {isOpen && (
        <Content>
          <div className="content-row">
            <div className="row-header">
              <div>Rebate</div>
              <div>200.000</div>
            </div>
            <div className="row-details">
              <div>Descrição do ponto</div>
              <div>100.000</div>
            </div>
          </div>

          <div className="content-row">
            <div className="row-header">
              <div>Rebate</div>
              <div>200.000</div>
            </div>
            <div className="row-details">
              <div>Descrição do ponto</div>
              <div>100.000</div>
            </div>
            <div className="row-details">
              <div>Descrição do ponto</div>
              <div>100.000</div>
            </div>
          </div>
        </Content>
      )}
    </Container>
  );
};

export default AccordionItem;
