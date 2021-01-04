import { useToast } from 'context/ToastContext';
import React, { useCallback, useRef, useState } from 'react';
import uploadFile from 'services/storage/sendFile';
import importResults from 'services/campaigns-counting/importResults';

import { Container, Button } from './style';

interface Props {
  id: number;
  status: 'empty' | 'loaded';
}

const Result: React.FC<Props> = ({ id, status }) => {
  const [loading, setLoading] = useState(false);
  const [internalStatusControl, setInternalStatusControl] = useState(status);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

  const handleClick = useCallback(async () => {
    setLoading(true);
    console.log('oi', id);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleImportResults = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      type: 'partial' | 'final',
    ) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setLoading(true);
        try {
          const { url } = await uploadFile(e.target.files[0], 'results');

          const { success, errors } = await importResults({
            fileUrl: url,
            type,
          });

          if (!success) {
            throw new Error(errors?.join('|') || 'Falha');
          }

          setInternalStatusControl('loaded');

          addToast({
            type: 'success',
            title: 'Resultados carregado com sucesso',
          });
        } catch {
          addToast({ type: 'error', title: 'Falha ao enviar resultados' });
        } finally {
          setLoading(false);
        }
      }
    },
    [addToast],
  );

  if (loading) {
    return (
      <Container>
        <Button disabled>Carregando...</Button>
      </Container>
    );
  }

  return internalStatusControl === 'empty' ? (
    <Container>
      <input
        type="file"
        id="fileId"
        accept=".xlsx, .xls"
        onChange={e => handleImportResults(e, 'final')}
        ref={inputFileRef}
        style={{ display: 'none' }}
      />
      <Button onClick={() => inputFileRef.current?.click()}>Carregar</Button>
    </Container>
  ) : (
    <Container>
      <Button onClick={handleClick}>Visualizar</Button>
      <Button onClick={handleClick}>Excluir</Button>
    </Container>
  );
};

export default Result;
