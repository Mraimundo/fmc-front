import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { pluginApi } from '../../services/api';

import { Container } from './styles';
import imageArrow from '../../assets/images/arrows.svg';

const Bainer: React.FC = () => {
  const [indication, setIndication] = useState('');

  const initialUrl = 'http://www.juntosfmc.com.br/';

  const [profileTipe, setProfileType] = useState('');

  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchIndication() {
      const response = await pluginApi.get('participants/profile');
      setIndication(response.data.indicator_code);
      setValue(initialUrl + indication);

      setProfileType(response.data.profile);
    }

    fetchIndication();
  }, [indication]);

  let colorType = '';

  switch (profileTipe) {
    case 'FOCALPOINT':
      colorType = 'verde';
      break;

    case 'PRODUTOR':
      colorType = 'marron';
      break;

    case 'PARTICIPANTE':
      colorType = 'azul';
      break;

    case 'FMC':
      colorType = 'cinza';
      break;

    default:
      colorType = 'verde';
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
        <div className="content-group">
          <h1 className="title">Indicação de Produtor</h1>
          <h2 className="sub-title">
            Indique produtores para participarem do juntos FMC.
          </h2>
        </div>
        <main>
          <div className="bainer-info__children">
            <h3>Como funciona</h3>
            <div className="bainer-guidance">
              <img src={imageArrow} alt="Arrow" />
              <h4>
                Para indicar você precisa copiar o link e enviar pra seu
                contato.
              </h4>
            </div>
            <div className="bainer-guidance">
              <img src={imageArrow} alt="Arrow" />
              <h4>
                Assim que o seu indicado receber o link ele já poderá se
                cadastrar.
              </h4>
            </div>
          </div>

          <div className="indicator-code">
            <div>
              <h1>Seu codigo de Indicação: {indication}</h1>
            </div>
            <div>
              <div className="register-group">
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
