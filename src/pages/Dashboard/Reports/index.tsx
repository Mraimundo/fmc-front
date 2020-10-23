import React from 'react';

import { Container, Link } from './styles';

export interface Report {
  title: string;
  url: string;
}

interface Props {
  data: Report[];
  loading?: boolean;
}

const Report: React.FC<Props> = ({ data, loading }) => {
  return (
    <Container>
      {data.map(({ title, url }) => (
        <li key={`report-${title}`}>
          <span>{title}</span>
          <Link href={url} target="_blank">
            Download
          </Link>
        </li>
      ))}
    </Container>
  );
};

export default Report;
