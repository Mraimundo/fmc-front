import React, { useState } from 'react';
import { Extract as IExtract } from 'services/extract/interfaces';
import { Container, Header, Content } from './styles';

interface Props {
  campaignExtract: IExtract;
}

const AccordionItem: React.FC<Props> = ({ campaignExtract }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { statement } = campaignExtract;
  const handleClick = () => setIsOpen(!isOpen);

  if (statement) {

    return (
      <Container>
        <Header onClick={handleClick}>
          <div>
            Safra
            <strong>{statement.campaign.title}</strong>
          </div>
          <div className="divider" />
          <div>
            <div className="text-right">Total</div>
            <strong>{statement.campaign.total} mil pontos</strong>
          </div>
          <div className={`chevron ${isOpen ? 'open' : ''}`} />
        </Header>
        {isOpen && (
          <Content>
            {statement.points &&
              statement.points.map(point => (
                <div className="content-row" key={point.id}>
                  <div className="row-header">
                    <div>{point.description}</div>
                    <div>{point.value}</div>
                  </div>
                  {point?.distributed?.length &&
                    point.distributed.map(distributed => (
                      <div
                        className="row-details"
                        key={distributed.balanceUnitId}
                      >
                        <div>{distributed.balanceUnitName}</div>
                        <div>{distributed.value}</div>
                      </div>
                    ))}
                </div>
              ))}
          </Content>
        )}
      </Container>
    );
  }
  return <div />;
};

export default AccordionItem;
