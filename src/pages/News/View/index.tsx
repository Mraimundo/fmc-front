import React, { useState, useEffect } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import getNewsById from 'services/news/getNewsById';
import history from 'services/history';
import { News as INews } from 'services/news/interfaces';
import News from 'components/News/View';

import { Container, Content } from './styles';

interface Params {
  id: string;
}

const View: React.FC = () => {
  const params = useParams<Params>();
  const [news, setNews] = useState<INews | null>(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (!params.id) return;
    const load = async () => {
      try {
        const data = await getNewsById(parseInt(params.id, 0));
        setNews(data);
      } catch {
        addToast({
          title: 'Falha ao carregar a notícia solicitada',
          type: 'error',
        });
        history.push('/news');
      }
    };
    load();
  }, [params, addToast]);

  return (
    <Container>
      <Content>{news && <News news={news} />}</Content>
    </Container>
  );
};

export default View;
