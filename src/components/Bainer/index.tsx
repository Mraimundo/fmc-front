import React, { useState, useEffect } from 'react';

import { pluginApi } from '../../services/api';

import { Container } from './styles';

const Bainer: React.FC = () => {
  const [indication, setIndication] = useState('');

  useEffect(() => {
    async function fetchIndication() {
      const response = await pluginApi.get('participants/profile');

      setIndication(response.data.indicator_code);
    }

    fetchIndication();
  }, []);

  return (
    <Container>
      <div className="content-bainer">
        <div>
          <h1 className="title">Indicação de Produtor</h1>
          <h2 className="sub-title">
            Indique produtores para participarem do juntos FMC.
          </h2>
        </div>
        <main>
          <div id="bainer-info">
            <div className="bainer-info__children">
              <h3>Como funciona</h3>
              <div className="bainer-guidance">
                <img src="" alt="" />
                <h4>
                  Para indicar você precisa copiar o link e enviar pra seu
                  contato
                </h4>
              </div>
              <div className="bainer-guidance">
                <img src="" alt="" />
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
                  <span>{`http://www.juntosfmc.com.br/${indication}`}</span>
                </div>
                <button type="button">Copiar</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Bainer;
