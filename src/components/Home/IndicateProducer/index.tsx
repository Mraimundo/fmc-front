import React, { useState, useEffect } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { pluginApi } from '../../../services/api';

import { Container, Cover, Title } from './styles';

import detail from '../../../assets/images/mini-banner-detail.svg';

const Bainer: React.FC = () => {
  const [indication, setIndication] = useState('');
  const initialUrl = 'https://www.juntosfmc.com.br/?code=';

  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchIndication() {
      const response = await pluginApi.get('participants/profile');
      setIndication(response.data.indicator_code);
      setValue(initialUrl + indication);
    }

    fetchIndication();
  }, [indication]);

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container>
      <Cover>
        <Title>Indique um Produtor</Title>
        <div className="content-bainer">
          <main>
            <div className="indicator-code">
              <h1>Seu Código de Indicação: {indication}</h1>
              <div className="indicator-code-content">
                <div>
                  <h2>Cadastra-se no Juntos FMC usando o link abaixo:</h2>
                  <span>{`${process.env.REACT_APP_API_HOST2}/?code=${indication}`}</span>
                </div>
                <CopyToClipboard text={value} onCopy={() => handleCopy()}>
                  <button type="button">Copiar</button>
                </CopyToClipboard>
                {copied ? <span style={{ color: 'black' }}>Copiado.</span> : null}
              </div>
            </div>
            {/* eslint-disable-next-line  */}
            <img src={detail} alt="Detalhe da image" />
          </main>
        </div>
      </Cover>
    </Container>
  );
};

export default Bainer;
