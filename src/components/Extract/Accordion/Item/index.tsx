import React, { useEffect, useState } from 'react';
import {
  Extract as IExtract,
  StatementPoints,
} from 'services/extract/interfaces';
import { formatPointsExtract } from 'util/points';
import { Container, Header, Content } from './styles';

interface Props {
  campaignExtract: IExtract;
}

interface Points extends StatementPoints {
  order: number;
  className: string;
}

const pointsOrder = [
  'rebate',
  'premiação de vendedores',
  'ponto extra',
  'ações de desenvolvimento',
];

const AccordionItem: React.FC<Props> = ({ campaignExtract }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { statement } = campaignExtract;
  const handleClick = () => setIsOpen(!isOpen);

  const [points, setPoints] = useState<Points[]>([]);

  useEffect(() => {
    if (!statement) return;

    const sortedPoints =
      statement?.points
        ?.map(item => {
          let order = pointsOrder.indexOf(item.balanceUnit.name.toLowerCase());
          const className =
            item.balanceUnit.name.toLowerCase() === 'ações de desenvolvimento'
              ? 'special'
              : '';
          if (order === -1) {
            order = 999;
          }

          return { ...item, order, className };
        })
        .sort((item1, item2) => (item1.order > item2.order ? 1 : -1)) || [];

    setPoints(sortedPoints);
  }, [statement]);

  if (statement?.campaign.id) {
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
            <strong>
              {formatPointsExtract(statement.campaign.total)} pontos
            </strong>
          </div>
          <div className={`chevron ${isOpen ? 'open' : ''}`} />
        </Header>
        {isOpen && (
          <Content>
            {points.map(point => (
              <div className="content-row" key={point.id}>
                <div className="row-header">
                  <div className={point.className}>
                    {point.balanceUnit.name}
                  </div>
                  <div className={point.className}>
                    {formatPointsExtract(point.value)}
                  </div>
                </div>
                {point?.distributed?.map(distributed => (
                  <div className="row-details" key={distributed.balanceUnitId}>
                    <div>{distributed.balanceUnitName}</div>
                    <div>{formatPointsExtract(distributed.value)}</div>
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
