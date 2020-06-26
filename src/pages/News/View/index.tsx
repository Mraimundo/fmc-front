import React, { useState, useEffect } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import getNewsById from 'services/news/getNewsById';
import getLastNews from 'services/news/getLastNewsList';
import history from 'services/history';
import { News as INews } from 'services/news/interfaces';
import News from 'components/News/View';
import Grid from 'components/News/Grid';

import { Container, Content, Separator } from './styles';

interface Params {
  id: string;
}

const View: React.FC = () => {
  const params = useParams<Params>();
  const [news, setNews] = useState<INews | null>(null);
  const [lastNews, setLastNews] = useState<INews[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    if (!params.id) return;
    const load = async () => {
      getLastNews().then(list => setLastNews(list));
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
      <Content>
        {news && <News news={news} />}
        <Separator />
        <h4>Últimas Notícias</h4>
        <Grid news={lastNews} />
      </Content>
    </Container>
  );
};

export default View;
