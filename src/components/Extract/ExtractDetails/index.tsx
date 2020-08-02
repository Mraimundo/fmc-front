import React from 'react';
import AccordionItem from 'components/Extract/Accordion/Item';
import { Container as AccordionContainer } from 'components/Extract/Accordion/styles';
import { Extract as IExtract } from 'services/extract/interfaces';
import { Container as DetailsContainer } from './styles';

interface Props {
  details: IExtract[];
}

const ExtractDetails: React.FC<Props> = ({ details }) => {
  return (
    <DetailsContainer>
      <AccordionContainer>
        {details.map(item => {
          const { statement } = item;
          if (statement && statement.length > 0) {
            const currentStatement = statement[0];
            return (
              <AccordionItem
                key={currentStatement.campaign.id}
                campaignExtract={item}
              />
            );
          }
          return <div />;
        })}
      </AccordionContainer>
    </DetailsContainer>
  );
};

export default ExtractDetails;
