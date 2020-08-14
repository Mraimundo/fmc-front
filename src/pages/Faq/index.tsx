import React, { useState, useEffect } from 'react';
import getFaqList from 'services/faq/getFaqList';
import { Faq as IFaq } from 'services/faq/interfaces';
import FaqList from 'components/Contact/Faq';

import { Container, Content } from './styles';

const Faq: React.FC = () => {
  const [faqList, setFaqList] = useState<IFaq[]>([]);

  useEffect(() => {
    getFaqList().then(data => setFaqList(data));
  }, []);

  return (
    <Container>
      <Content>
        <h3>FAQ</h3>
        <FaqList data={faqList} />
      </Content>
    </Container>
  );
};

export default Faq;
