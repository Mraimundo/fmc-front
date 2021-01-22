import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { pluginApi } from '../../services/api';

import { Container } from './styles';
import imageArrow from '../../assets/images/arrows.svg';

const Bainer: React.FC = () => {
  const [indication, setIndication] = useState('');

  const initialUrl = 'http://www.juntosfmc.com.br/';

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
    setCopied(true)

    setTimeout(() => {
    setCopied(false)
    }, 3000);
  }

  return (
    <Container>
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
                  contato
                </h4>
              </div>
              <div className="bainer-guidance">
                <img src={imageArrow} alt="Arrow" />
                <h4>
                  Para indicar você precisa copiar o link e enviar pra seu
                  contato
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
                  {<span>{`http://www.juntosfmc.com.br/${indication}`}</span>}
                </div>
                <CopyToClipboard text={value} onCopy={() => handleCopy()}>
                  <button type="button">Copiar</button>
                </CopyToClipboard>
                {copied ? <span style={{ color: "black"}}>Copiado.</span> : null}
              </div>
              <div className="color-content"></div>
            </div>
        </main>
      </div>
    </Container>
  );
};

export default Bainer;
