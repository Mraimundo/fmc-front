import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import getNewsById from 'services/news/getNewsById';
import getLastNews from 'services/news/getLastNewsList';
import history from 'services/history';
import { News as INews } from 'services/news/interfaces';
import News from 'components/News/View';
import { Button } from 'components/shared';

import { Container, Content, Separator, Grid } from './styles';

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
      getLastNews(parseInt(params.id, 0)).then(list => setLastNews(list));
      try {
        const data = await getNewsById(parseInt(params.id, 0));
        setNews(data);
        window.scrollTo({
          top: 0,
        });
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

  const handleBack = useCallback(() => {
    history.push('/news');
  }, []);

  return (
    <Container>
      <Content>
        {news && <News news={news} />}
        <Separator />
        <h4>Últimas Notícias</h4>
        <Grid news={lastNews} />
        <Button buttonRole="primary" type="button" onClick={handleBack}>
          Ver todas as notícias
        </Button>
      </Content>
    </Container>
  );
};

export default View;
