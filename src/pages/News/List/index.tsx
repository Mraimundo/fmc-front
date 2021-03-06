import React, { useState, useEffect, useCallback } from 'react';

import getNews from 'services/news/getNewsList';
import { News as INews } from 'services/news/interfaces';
import { Pagination } from 'config/constants/vendavallPaginationInterface';

import { Grid } from 'components/News';
import { Button } from 'components/shared';

import { Container, Content } from './styles';

const News: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  useEffect(() => {
    getNews({ page: 1 }).then(data => {
      setPagination(data.pagination);
      setNews(data.news);
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    if (pagination.current_page === pagination.last_page) return;
    getNews({ page: pagination.current_page + 1 }).then(data => {
      setPagination(data.pagination);
      setNews([...news, ...data.news]);
    });
  }, [news, pagination]);

  return (
    <Container>
      <Content>
        <h3>Notícias</h3>
        <Grid news={news} />
        {pagination.current_page !== pagination.last_page && (
          <Button buttonRole="primary" type="button" onClick={handleLoadMore}>
            Carregar mais notícias
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default News;
