import React from 'react';
import AccordionItem from 'components/Extract/Accordion/Item';
import { Container as AccordionContainer } from 'components/Extract/Accordion/styles';
import { Container as DetailsContainer } from './styles';

const ExtractDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <AccordionContainer>
        <AccordionItem />
        <AccordionItem />
      </AccordionContainer>
    </DetailsContainer>
  );
};

export default ExtractDetails;
