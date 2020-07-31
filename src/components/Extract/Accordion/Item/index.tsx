import React, { useState } from 'react';
import { Container, Header, Content } from './styles';

const AccordionItem: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Header onClick={handleClick}>
        <div>
          Safra
          <div>2020/21</div>
        </div>
        <div className="divider" />
        <div>
          <div className="text-right">Total</div>
          <div>500 mil pontos</div>
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
