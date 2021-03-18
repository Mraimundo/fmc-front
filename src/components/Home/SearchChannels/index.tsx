import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { pluginApi } from '../../../services/api';

import { Container } from './styles';


const Bainer: React.FC = () => {
  const [indication, setIndication] = useState('');

  const initialUrl = 'https://www.juntosfmc.com.br/?code=';

  const [profileType, setProfileType] = useState('');
  const [profile, setProfile] = useState('');

  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchIndication() {
      const response = await pluginApi.get('participants/profile');
      setIndication(response.data.indicator_code);
      setValue(initialUrl + indication);

      setProfileType(response.data.establishment.type_name);
      setProfile(response.data.profile);
    }

    fetchIndication();
  }, [indication]);

  let colorType = '';
  switch (profileType) {
    case 'Cooperativa':
      colorType = 'verde';
      break;

    case 'FMC':
      colorType = 'marron';
      break;

    case 'Revenda':
      colorType = 'azul';
      break;

    default:
      colorType = 'verde';
  }

  if (profile === 'FMC' && profileType === 'Revenda') {
    colorType = 'cinza';
  }


  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container colorType={colorType}>
      <div className="content-bainer">
        <h1>Indique um Produtor</h1>
        <main>
          <div className="indicator-code">
            <h1>Seu Código de Indicação: {indication}</h1>
            <div className="indicator-code-content">
              <div>
                <h2>Cadastra-se no Juntos FMC usando o link abaixo:</h2>
                <span>{`https://www.juntosfmc.com.br/?code=${indication}`}</span>
              </div>
              <CopyToClipboard text={value} onCopy={() => handleCopy()}>
                <button type="button">Copiar</button>
              </CopyToClipboard>
              {copied ? <span style={{ color: 'black' }}>Copiado.</span> : null}
            </div>
            <div className="color-content" />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Bainer;
