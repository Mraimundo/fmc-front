import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, Content } from './styles';

interface Props {
  className?: string;
}

const Loading: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Content>
        <Skeleton width="100%" height={292} />
        <Skeleton width="70%" height={25} style={{ marginTop: 10 }} />
        <Skeleton width="25%" height={20} style={{ marginTop: 12 }} />
        <Skeleton width="100%" height={18} style={{ marginTop: 20 }} />
        <Skeleton width="100%" height={18} style={{ marginTop: 5 }} />
        <Skeleton width="100%" height={18} style={{ marginTop: 5 }} />
        <Skeleton width="40%" height={18} style={{ marginTop: 5 }} />
        <Skeleton width="70%" height={25} style={{ marginTop: 20 }} />
        <Skeleton width="40%" height={20} style={{ marginTop: 12 }} />
      </Content>
    </Container>
  );
};

export default Loading;
