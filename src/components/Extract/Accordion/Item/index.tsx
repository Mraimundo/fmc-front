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

  if (statement && statement.length > 0) {
    const [currentExtract] = statement;
    return (
      <Container>
        <Header onClick={handleClick}>
          <div>
            Safra
            <strong>{currentExtract.campaign.title}</strong>
          </div>
          <div className="divider" />
          <div>
            <div className="text-right">Total</div>
            <strong>{currentExtract.campaign.total} mil pontos</strong>
          </div>
          <div className={`chevron ${isOpen ? 'open' : ''}`} />
        </Header>
        {isOpen && (
          <Content>
            {currentExtract.points &&
              currentExtract.points.map(point => (
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
