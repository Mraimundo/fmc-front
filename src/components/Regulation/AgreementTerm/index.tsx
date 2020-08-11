import React, { useCallback, useState, useRef } from 'react';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import getUrlRegulationToDownload from 'services/register/regulation/getUrlRegulationToDownload';
import { useToast } from 'context/ToastContext';
import uploadFileToStorage from 'services/storage/sendFile';
import saveUrlAgreementTerm from 'services/register/regulation/uploadAgreementTerm';
import {
  StyledAgreementTermContent,
  StyledButtonConfirm,
  RegulationDownload,
  StyledUploadAgreementTerm,
  StyledActions,
  Modal,
  ModalContent,
} from './styles';

interface Props {
  regulation: Regulation;
  handleIsResponsible(): void;
  handleSendAgreementTerm(): void;
}

const AgreementTerm: React.FC<Props> = ({
  regulation,
  handleIsResponsible,
  handleSendAgreementTerm,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();
  const [showUploadedModal, setShowUploadedModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleDownloadClick = useCallback(async () => {
    if (!regulation) return;

    setDownloading(true);
    let url = '';

    try {
      url = await getUrlRegulationToDownload(
        regulation.id,
        `${regulation.name}.pdf`,
      );
    } catch (e) {}

    setDownloading(false);
    const linkClick = document.createElement('a');
    linkClick.href = url;
    linkClick.download = `${regulation.name}.pdf`;
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [regulation]);

  const saveUploadedUrl = useCallback(
    async (regulationId: number, url: string) => {
      const { status } = await saveUrlAgreementTerm(regulationId, url);

      return status;
    },
    [],
  );

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const isFileTooLarge = e.target.files[0].size / 1024 > 4096;
        if (isFileTooLarge) {
          addToast({
            title: 'Arquivo excede o tamanho máximo de 4mb!',
            type: 'error',
          });
          return;
        }

        setAttachingFile(true);
        const { url } = await uploadFileToStorage(
          e.target.files[0],
          'agreement_term',
        );
        setFileUrl(url);
        setAttachingFile(false);
        if ((await saveUploadedUrl(regulation.id, url)) === 'success') {
          setShowUploadedModal(true);
        } else {
          setShowErrorModal(true);
        }
      }
    },
    [addToast, saveUploadedUrl, regulation.id],
  );

  return (
    <>
      <StyledAgreementTermContent type="primary">
        <h1>Voce é o representante legal de sua empresa?</h1>
        <h4>
          O acordo de safra deve ser aceito somente pelo responsável em assumir
          o compromisso de metas de faturamento POG.
        </h4>
        <div>
          Caso você NÃO seja o responsável, é necessário que você siga os passos
          seguintes:
        </div>
        <div>
          {`1. Clique no botão "FAZER DOWNLOAD DO ACORDO SAFRA" para fazer o
          download do Acordo de Safra;`}
        </div>
        <div>
          2. Imprima e solicite que o responsável assine o acordo. Em seguida,
          digitalize o Acordo rubricado e assinado;
        </div>
        <div>
          {`3. Clique no botão "Fazer upload do Acordo de Safra" para enviá-lo
          para análise;`}
        </div>
        <div>
          4. Aguarde a aprovação da análise do documento para ter seu acesso
          liberado.
        </div>
      </StyledAgreementTermContent>
      <StyledActions>
        <RegulationDownload
          type="button"
          disabled={downloading}
          onClick={handleDownloadClick}
        >
          {/* <ReactSVG src={pdfIcon} /> */}
          FAZER DOWNLOAD DO ACORDO SAFRA
        </RegulationDownload>
        <StyledUploadAgreementTerm>
          <label htmlFor="fileId">
            <input
              type="file"
              id="fileId"
              accept="image/*, .pdf"
              onChange={handleAttachFile}
              ref={inputFileRef}
            />
            <button
              type="button"
              onClick={() => {
                inputFileRef.current?.click();
              }}
            >
              {fileUrl !== '' ? (
                <>Arquivo anexado</>
              ) : (
                <>
                  {attachingFile
                    ? 'Carregando ... '
                    : 'FAZER UPLOAD DO ACORDO SAFRA'}
                </>
              )}
            </button>
          </label>
        </StyledUploadAgreementTerm>
      </StyledActions>
      <StyledButtonConfirm
        type="button"
        buttonRole="primary"
        onClick={handleIsResponsible}
      >
        SOU O REPRESENTANTE LEGAL
      </StyledButtonConfirm>
      <Modal
        isOpen={showUploadedModal}
        onRequestClose={() => {
          setShowUploadedModal(false);
          handleSendAgreementTerm();
        }}
      >
        <ModalContent>
          <h2>Obrigado por enviar o Acordo de Safra.</h2>
          <div>
            Em alguns dias iremos verificar a assinatura e se estiver tudo certo
            você será avisado por email que seu acesso está liberado.
          </div>
          <StyledButtonConfirm
            type="button"
            buttonRole="primary"
            onClick={() => {
              setShowUploadedModal(false);
              handleSendAgreementTerm();
            }}
          >
            Ok
          </StyledButtonConfirm>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showErrorModal}
        onRequestClose={() => {
          setShowErrorModal(false);
        }}
      >
        <ModalContent>
          <h2>Ocorreu um erro ao enviar o Acordo de Safra, tente novamente.</h2>
          <StyledButtonConfirm
            type="button"
            buttonRole="primary"
            onClick={() => {
              setShowErrorModal(false);
            }}
          >
            Ok
          </StyledButtonConfirm>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgreementTerm;
