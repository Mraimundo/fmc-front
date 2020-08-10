import React, { useCallback, useState, useRef } from 'react';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import getUrlRegulationToDownload from 'services/register/regulation/getUrlRegulationToDownload';
import { ReactSVG } from 'react-svg';
import pdfIcon from 'assets/images/pdf.svg';
import { useToast } from 'context/ToastContext';
import uploadFileToStorage from 'services/storage/sendFile';
import UploadAgreementTerm from 'services/register/regulation/uploadAgreementTerm';
import {
  StyledAgreementTermContent,
  Button,
  RegulationDownload,
  StyledUploadAgreementTerm,
} from './styles';

interface Props {
  regulation: Regulation;
  handleIsResponsible(): void;
}

const AgreementTerm: React.FC<Props> = ({
  regulation,
  handleIsResponsible,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

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

  const saveUrlAgreementTerm = useCallback(
    async (regulationId: number, url: string) => console.log(url),
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
        saveUrlAgreementTerm(regulation.id, url);
      }
    },
    [addToast, saveUrlAgreementTerm, regulation.id],
  );

  return (
    <>
      <StyledAgreementTermContent type="primary">
        Termo de acordo
        <RegulationDownload
          type="button"
          disabled={downloading}
          onClick={handleDownloadClick}
        >
          <ReactSVG src={pdfIcon} />
          Download Regulamento (PDF)
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
                <>{attachingFile ? 'Carregando ... ' : 'Anexar arquivo'}</>
              )}
            </button>
          </label>
        </StyledUploadAgreementTerm>
      </StyledAgreementTermContent>
      <Button type="button" buttonRole="primary" onClick={handleIsResponsible}>
        Sou o responsável
      </Button>
    </>
  );
};

export default AgreementTerm;
