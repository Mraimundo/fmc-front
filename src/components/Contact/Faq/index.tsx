import React, { useEffect, useState } from 'react';
import parser from 'html-react-parser';

import transformer, { Item } from 'services/faq/transformers/toFaqList';
import { Faq as IFaq } from 'services/faq/interfaces';

import { Container, Content, SubTitle, Accordion, FaqBox } from './styles';

interface Props {
  data: IFaq[];
}
const Faq: React.FC<Props> = ({ data }) => {
  const [faqList, setFaqList] = useState<Item[]>([]);

  useEffect(() => {
    setFaqList(transformer(data));
  }, [data]);

  return (
    <Container>
      <Content>
        {faqList.map(({ category, questions }) => (
          <div key={`category-${category}`}>
            <SubTitle>{category}</SubTitle>
            {questions.map(item => (
              <Accordion
                key={`question-${item.question}`}
                title={item.question}
              >
                <FaqBox>{parser(item.answer)}</FaqBox>
              </Accordion>
            ))}
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default Faq;
