import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { vendavallApi } from '../../../services/api';

import {
  SearchCannel,
  Cover,
  CoverText,
  Title,
  Description,
  SearchParticipants,
}
  from './styles';

interface PropsMiniBanner {
  id: number;
  title: string;
  description: string;
  params: string;
  picture: string;
  mobile_picture: string;
  type: string;
  url: string;
}

const Bainer: React.FC = () => {
  const [minibanner, setMiniBanner] = useState<PropsMiniBanner>({} as PropsMiniBanner);
  // const history = useHistory();

  useEffect(() => {
    async function fetchIndication() {
      const response = await vendavallApi.get('/mini_banners?slug=banner-home');
      setMiniBanner(response.data);
    }
    fetchIndication();
  }, []);


  return (
    <SearchCannel>
      <Cover key={`key-minibanner-${minibanner.id}`}>
        <img src={minibanner.mobile_picture} alt="Canais de participantes" />
        <CoverText>
          <Title>{minibanner.title}</Title>
          <Description>{minibanner.description}</Description>
        </CoverText>
        <SearchParticipants>
          <Link
            to={{ pathname: minibanner.url }}
            target="blank"
          >
            {minibanner.params}
          </Link>
        </SearchParticipants>
      </Cover>
    </SearchCannel>
  );
};

export default Bainer;
