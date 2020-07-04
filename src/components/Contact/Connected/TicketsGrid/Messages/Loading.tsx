import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Content, MessageBox } from './styles';

const Loading: React.FC = () => {
  return (
    <>
      <Content>
        <MessageBox type="p">
          <span>
            <Skeleton />
          </span>
          <p>
            <Skeleton height={45} />{' '}
          </p>
        </MessageBox>
      </Content>
      <Content>
        <MessageBox type="r">
          <span>
            <Skeleton />
          </span>
          <p>
            <Skeleton height={60} />{' '}
          </p>
        </MessageBox>
      </Content>
    </>
  );
};

export default Loading;
