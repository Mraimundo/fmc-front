import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { pluginApi } from '../../services/api';

import { Container, TextType } from './styles';
import imageArrow from '../../assets/images/arrows.svg';

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
    //
    colorType = 'cinza';
  }

  let diminacType = '';
  switch (profileType) {
    case 'Cooperativa':
      diminacType =
        'Para indicar você precisa copiar o link e enviar para seus cooperados.';
      break;
    case 'Revenda':
      diminacType =
        'Para indicar você precisa copiar o link e enviar para seus clientes.';
      break;
    default:
      break;
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
            Indique seus clientes para participarem do JUNTOS FMC.
          </h2>
        </div>
        <main>
          <div className="bainer-info__children">
            <h3>Como funciona</h3>
            <div className="bainer-guidance">
              <img src={imageArrow} alt="Arrow" />
              <TextType diminacType={diminacType}>{diminacType}</TextType>
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
              <h1>Seu Código de Indicação: {indication}</h1>
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
