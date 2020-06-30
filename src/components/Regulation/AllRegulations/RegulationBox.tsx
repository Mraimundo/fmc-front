import React, { useEffect, useState, useRef, useCallback } from 'react';
import parser from 'html-react-parser';
import ReactToPrint from 'react-to-print';
import { Button } from 'components/shared';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import getRegulationById from 'services/register/regulation/getRegulationById';

import { ContentRegulation, Actions, PrintRef } from './styles';

interface Props {
  acceptedIds: number[];
  handleAcceptRegulation(
    id: number,
    version: number,
    title: string,
  ): Promise<void> | void;
  regulationId: number;
}

const RegulationBox: React.FC<Props> = ({
  acceptedIds,
  handleAcceptRegulation,
  regulationId,
}) => {
  const [canAccept, setCanAccept] = useState(false);
  const t = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [regulation, setRegulation] = useState<Regulation | null>(null);

  useEffect(() => {
    getRegulationById(regulationId).then(item => setRegulation(item));
  }, [regulationId]);

  const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight
    ) {
      setCanAccept(true);
    }
  };

  const handleAcceptClick = useCallback(async () => {
    if (!regulation) return;
    setLoading(true);
    await handleAcceptRegulation(
      regulation.id,
      regulation.version,
      regulation.name,
    );
    setLoading(false);
  }, [regulation, handleAcceptRegulation]);

  return (
    regulation && (
      <>
        <ContentRegulation onScroll={handleDivScroll}>
          <PrintRef ref={t}>{parser(regulation.content || '')}</PrintRef>
        </ContentRegulation>
        <Actions>
          {acceptedIds.indexOf(regulation.id) === -1 && (
            <Button
              buttonRole="tertiary"
              type="button"
              loading={loading}
              onClick={handleAcceptClick}
              disabled={!canAccept}
            >
              Aceitar
            </Button>
          )}

          <ReactToPrint
            trigger={() => {
              return (
                <Button buttonRole="secondary" type="button">
                  Download
                </Button>
              );
            }}
            content={() => t.current}
          />
        </Actions>
      </>
    )
  );
};

export default RegulationBox;
