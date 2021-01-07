import React, { useCallback, useRef, useState } from 'react';
import uploadFileToStorage from 'services/storage/sendFile';
import sendFile from 'services/campaigns-counting/importResults';
import Button from 'components/shared/Button';

import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import { Container, Separator } from './styles';

const Result: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [attachingFile, setAttachingFile] = useState(false);
  const [loading, setLoading] = useState(false);
  const { simulating } = useAuth();
  const { addToast } = useToast();

  const handleImportFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (simulating) {
        addToast({ type: 'error', title: 'Operação não permitida' });
        return;
      }
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        try {
          setAttachingFile(true);
          const { url } = await uploadFileToStorage(
            e.target.files[0],
            'avatar',
          );

          setLoading(true);
          const { success, errors } = await sendFile({
            fileUrl: url,
            type: 'final',
          });

          if (success) {
            addToast({
              type: 'success',
              title: 'Arquivo importado com sucesso!',
            });
            return;
          }

          if (!success && errors?.length) {
            addToast({ type: 'error', title: errors?.join('|') });
            return;
          }

          throw new Error('');
        } catch {
          addToast({ title: 'Falha ao carregar arquivo!', type: 'error' });
        } finally {
          setAttachingFile(false);
          setLoading(false);
        }
      }
    },
    [addToast, simulating],
  );

  return (
    <Container>
      <h4>Estoque Final</h4>
      <Separator />
      <input
        type="file"
        id="fileId"
        accept=".xlsx, .xls"
        onChange={handleImportFile}
        ref={inputFileRef}
        style={{ display: 'none' }}
      />
      <Button
        type="button"
        onClick={e => inputFileRef.current?.click()}
        buttonRole="primary"
        loading={attachingFile || loading}
        disabled={attachingFile || loading}
        loadingText={attachingFile ? 'Carregando ' : 'Importando '}
      >
        Upload
      </Button>
    </Container>
  );
};

export default Result;