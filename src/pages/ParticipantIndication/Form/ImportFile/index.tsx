import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useToast } from 'context/ToastContext';
import uploadFileToStorage from 'services/storage/sendFile';
import sendFile from 'services/participantIndication/importFile';
import forceDownload from 'services/storage/getUrlToForceDownload';

import { Container, SaveButton } from './styles';

const ImportFile: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    setDownloadLink(
      forceDownload({
        filename: 'Indicação_participante_em_lote_modelo.xlsx',
        url:
          'https://storage.vendavall.com.br/photos/1593794488.5eff5fb8bb63c8.54067056.xlsx',
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
    try {
      setLoading(true);
      await sendFile(fileUrl);
      addToast({
        title: 'Indicação em lote realizada com sucesso',
        type: 'success',
      });
    } catch (e) {
      if (e.response?.data?.errors) {
        e.response?.data?.errors?.map((err: string) => {
          addToast({
            title: err,
            type: 'error',
          });
        });
      } else {
        addToast({
          title:
            'Falha ao carregar arquivo, por favor entre em contato com o suporte',
          type: 'error',
        });
      }
    }
    setFileUrl('');
    setLoading(false);
  }, [fileUrl, addToast]);

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
    </Container>
  );
};

export default ImportFile;
