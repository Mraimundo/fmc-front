import React, { useRef, useState } from 'react';
import useOnClickOutside from 'hooks/use-on-click-outside';

import shareImg from 'assets/images/points-simulator/share.svg';
import { Container, Button, ShareContainer, ReactSVG } from './styles';

interface Props {
  handleSaveSimulationClick(): void;
  handleDownloadPdf(): void;
  handleSendByEmail(): void;
}

const Footer: React.FC<Props> = ({
  handleSaveSimulationClick,
  handleDownloadPdf,
  handleSendByEmail,
}) => {
  const [visible, isVisible] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => isVisible(false));

  return (
    <Container>
      <span>
        Os resultados acima são meramente uma simulação e não podem ser
        utilizados para qualquer tipo de premiação
      </span>
      <div className="_actions-container-footer">
        <ShareContainer ref={dropdownRef}>
          <ReactSVG
            src={shareImg}
            onClick={() => isVisible(oldValue => !oldValue)}
          />
          {visible && (
            <div id="share-menu-drop">
              <button onClick={handleDownloadPdf} type="button">
                Download
              </button>
              <button onClick={handleSendByEmail} type="button">
                Compartilhar por email
              </button>
            </div>
          )}
        </ShareContainer>
        <Button
          buttonRole="primary"
          type="button"
          onClick={handleSaveSimulationClick}
        >
          Salvar Simulação
        </Button>
      </div>
    </Container>
  );
};

export default Footer;
