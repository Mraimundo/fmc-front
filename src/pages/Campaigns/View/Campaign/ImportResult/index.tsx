import React, { useCallback, useEffect, useRef, useState } from 'react';
import uploadFileToStorage from 'services/storage/sendFile';
import sendFile from 'services/campaigns-counting/importFinalStock';
import Button from 'components/shared/Button';
import { Campaign as ICampaign } from 'services/campaigns/getCampaign';
import hasStock, { Stock } from 'services/campaigns/hasStock';
import getUrlDownloadStock from 'services/campaigns-counting/getUrlToStockDownload';

import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import { Container, Separator } from './styles';

interface Props {
  campaign: ICampaign;
}

const Result: React.FC<Props> = ({ campaign }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileAttached, setFileAttached] = useState(false);
  const [loading, setLoading] = useState(false);
  const { simulating } = useAuth();
  const { addToast } = useToast();
  const [stock, setStock] = useState<Stock | null>(null);
  const [reload, setReload] = useState(1);

  useEffect(() => {
    if (!campaign.id) return;

    hasStock(campaign.id).then(data => setStock(data));
  }, [campaign.id, reload]);

  const handleImportFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (simulating) {
        addToast({ type: 'error', title: 'Operação não permitida' });
        return;
      }
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        try {
          if (e?.target?.files[0].type !== 'application/pdf') {
            addToast({
              type: 'error',
              title: 'Apenas arquivo PDF é permitido',
            });
            return;
          }

          setAttachingFile(true);
          const { url } = await uploadFileToStorage(
            e.target.files[0],
            'avatar',
          );

          setLoading(true);
          const { success, errors } = await sendFile({
            fileUrl: url,
            campaignId: campaign.id,
          });

          if (success) {
            addToast({
              type: 'success',
              title: 'Arquivo importado com sucesso!',
            });
            setFileAttached(true);
            setReload(oldValue => oldValue + 1);
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
    [addToast, simulating, campaign.id],
  );

  return (
    <Container>
      <h4>Estoque Final</h4>
      <Separator />
      <input
        type="file"
        id="fileId"
        accept=".pdf"
        onChange={handleImportFile}
        ref={inputFileRef}
        style={{ display: 'none' }}
      />
      {stock?.hasStock ? (
        <span>
          Arquivo enviado em <a href={stock.stockUrl}>{stock.stockDate}</a>
        </span>
      ) : (
        <Button
          type="button"
          onClick={() => inputFileRef.current?.click()}
          buttonRole="primary"
          loading={attachingFile || loading}
          disabled={attachingFile || loading || fileAttached}
          loadingText={
            fileAttached
              ? 'Arquivo enviado'
              : `${attachingFile ? 'Carregando ' : 'Importando '}`
          }
        >
          Upload
        </Button>
      )}
    </Container>
  );
};

export default Result;
