import React, { useState, useCallback } from 'react';

import { Grid } from 'components/News';
import { Button } from 'components/shared';

import { Container, Content } from './styles';

const News: React.FC = () => {
  const [t, setT] = useState([1, 2, 3]);

  const handleLoadMore = useCallback(() => {
    setT([...t, 4, 5, 6]);
  }, [t]);

  return (
    <Container>
      <Content>
        <h3>Notícias</h3>
        <Grid news={t} />

        <Button buttonRole="tertiary" type="button" onClick={handleLoadMore}>
          Carregar mais notícias
        </Button>
      </Content>
    </Container>
  );
};

export default News;
