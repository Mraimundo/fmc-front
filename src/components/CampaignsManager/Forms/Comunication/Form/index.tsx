import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'components/shared';

import { Container, Content, Box } from './styles';

const Form: React.FC = () => {
  const mock = {
    homeImage:
      'https://storage.vendavall.com.br/avatar/1595269719.5f15e257356c27.50563246.png',
    internalImage:
      'https://storage.vendavall.com.br/avatar/1595269711.5f15e24f03f600.55072907.png',
    emailImage:
      'https://storage.vendavall.com.br/avatar/1595269719.5f15e257356c27.50563246.png',
    campaignListImage:
      'https://storage.vendavall.com.br/avatar/1595269711.5f15e24f03f600.55072907.png',
  };

  return (
    <Container>
      <h4>Comunicação: Bateu Levou</h4>
      <Content>
        <div>
          <div>
            <Box>
              <img src={mock.homeImage} alt="Imagem que exibirá na Home" />
              <span>Imagem Home - Destaques</span>
            </Box>
          </div>
          <div>
            <Box>
              <img src={mock.emailImage} alt="Imagem exemplo do E-mail" />
              <span>
                <Checkbox color="default" /> Disparo automático do E-mail da
                campanha
              </span>
            </Box>
          </div>
        </div>
        <div>
          <div>
            <Box>
              <img src={mock.internalImage} alt="Imagem interna da Campanha" />
              <span>Imagem da campanha - Interna</span>
            </Box>
          </div>
          <div>
            <Box>
              <img
                src={mock.campaignListImage}
                alt="Imagem da Lista de campanhas"
              />
              <span>Imagem da Lista de Campanhas</span>
            </Box>
          </div>
        </div>
      </Content>
      <Button type="button" buttonRole="primary">
        Próximo
      </Button>
    </Container>
  );
};

export default Form;
