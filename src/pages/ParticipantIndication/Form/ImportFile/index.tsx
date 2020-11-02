import React, { useState, useCallback, useRef, useEffect } from 'react';
import uploadFileToStorage from 'services/storage/sendFile';
import sendFile from 'services/participant-indication/importFile';
import forceDownload from 'services/storage/getUrlToForceDownload';
import FinishModal from 'components/ParticipantIndication/Modals/FinishImport';

import { Container, SaveButton } from './styles';

const ImportFile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [downloadLink, setDownloadLink] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [importedLines, setImportedLines] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setDownloadLink(
      forceDownload({
        filename: 'Indicação_participante_em_lote_modelo.xlsx',
        url:
          'https://storage.vendavall.com.br/regulations/1598300182.5f44201660c321.64420944.xlsx',
      }),
    );
  }, []);

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setAttachingFile(true);
        const { url } = await uploadFileToStorage(e.target.files[0], 'avatar');
        setFileUrl(url);
        setAttachingFile(false);
      }
    },
    [],
  );

  const handleImport = useCallback(async () => {
    setLoading(true);
    const result = await sendFile(fileUrl);
    setImportedLines(result.success_count);
    setErrors(result.errors);
    setFileUrl('');
    setLoading(false);
    setModalOpened(true);
  }, [fileUrl]);

  return (
    <Container>
      <h3>Em lote</h3>
      <a href={downloadLink} download>
        Download da planilha de exemplo
      </a>
      <label htmlFor="fileId">
        <input
          type="file"
          id="fileId"
          accept=".xlsx, .xls"
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
            <>Planilha selecionada</>
          ) : (
            <>
              {attachingFile
                ? 'Carregando ... '
                : 'Escolher planilha para Importar'}
            </>
          )}
        </button>
      </label>
      <SaveButton
        buttonRole="secondary"
        type="button"
        loading={loading}
        disabled={fileUrl === ''}
        onClick={handleImport}
      >
        Enviar
      </SaveButton>
      <FinishModal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        importedLines={importedLines}
        errors={errors}
      />
    </Container>
  );
};

export default ImportFile;
