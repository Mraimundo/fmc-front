import React, { useCallback, useEffect, useRef, useState } from 'react';

import uploadFile from 'services/storage/sendFile';
import importResults from 'services/campaigns-counting/importResults';
import ReactPaginate from 'react-paginate';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import CampaignsSelect from 'components/CampaignsCounting/Selects/Campaigns';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input/BaseInput';
import getCampaigns, {
  Campaign,
} from 'services/campaigns-counting/getCampaigns';
import { useToast } from 'context/ToastContext';
import Table from './Table';

import {
  Container,
  Content,
  StyledBox,
  CampaignsSelectBox,
  CampaignDetails,
  Title,
  Tabs,
  Item,
  Separator,
  ActionBox,
} from './styles';

export enum Tab {
  partials = 'Apuração de campanhas',
  final = 'Upload de resultado Final',
}

interface Filter {
  clientGroup: string;
  campaignId: number | null;
}

const CampaignsCounting: React.FC = () => {
  const { addToast } = useToast();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.partials);

  const [campaignSelected, setCampaignSelected] = useState<Campaign | null>(
    null,
  );
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const [
    campaignFilterSelected,
    setCampaignFilterSelected,
  ] = useState<Campaign | null>(null);
  const [tableData, setTableData] = useState<Campaign[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [clientGroupInput, setClientGroupInput] = useState('');
  const [filters, setFilters] = useState<Filter>({
    clientGroup: '',
    campaignId: null,
  });

  const removeCampaign = useCallback((campaign: Campaign) => {
    setCampaigns(oldState => oldState.filter(item => item.id !== campaign.id));
  }, []);

  useEffect(() => {
    if (campaignSelected) {
      setCampaigns(oldState => {
        const campaignAlreadyAdded = oldState.find(
          item => item.id === campaignSelected.id,
        );
        if (campaignAlreadyAdded) {
          return oldState;
        }
        return [...oldState, campaignSelected];
      });
      setTimeout(() => {
        setCampaignSelected(null);
      }, 1000);
    }
  }, [campaignSelected]);

  useEffect(() => {
    setFetching(true);
    getCampaigns({
      page,
      clientGroup: filters.clientGroup,
      campaignId: filters.campaignId || undefined,
    })
      .then(({ data, pagination }) => {
        setTableData(data);
        setLastPage(pagination.last_page);
      })
      .finally(() => setFetching(false));
  }, [page, filters]);

  const handleFilterClick = useCallback(() => {
    setFilters({
      campaignId: campaignSelected?.id || null,
      clientGroup: clientGroupInput,
    });
  }, [campaignSelected, clientGroupInput]);

  const [attachingFile, setAttachingFile] = useState(false);

  const handleImportResults = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      type: 'partial' | 'final',
    ) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setAttachingFile(true);
        try {
          const { url } = await uploadFile(e.target.files[0], 'results');

          const { success, errors } = await importResults({
            fileUrl: url,
            type,
          });

          if (!success) {
            throw new Error(errors?.join('|') || 'Falha');
          }

          addToast({
            type: 'success',
            title: 'Resultados carregado com sucesso',
          });
        } catch {
          addToast({ type: 'error', title: 'Falha ao enviar resultados' });
        } finally {
          setAttachingFile(false);
        }
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Title>{Tab.partials}</Title>
        <Tabs>
          <Item
            onClick={() => setTabSelected(Tab.partials)}
            selected={tabSelected === Tab.partials}
          >
            <span>Importador de parciais</span>
          </Item>
          <Item
            onClick={() => setTabSelected(Tab.final)}
            selected={tabSelected === Tab.final}
          >
            <span>{Tab.final}</span>
          </Item>
        </Tabs>
        {tabSelected === Tab.partials && (
          <StyledBox>
            <CampaignsSelectBox>
              <CampaignsSelect
                setValue={value => setCampaignSelected(value)}
                value={campaignSelected}
                placeholder="Campanhas"
              />
              {campaigns.map(item => (
                <CampaignDetails key={`campaign${item.campaign}`}>
                  <h3>{item.campaign}</h3>
                  <ReactSVG
                    src={deleteIcon}
                    onClick={() => removeCampaign(item)}
                  />
                </CampaignDetails>
              ))}
            </CampaignsSelectBox>
            <Separator />
            <ActionBox>
              <h4>Gerar Relatório</h4>
              <Button buttonRole="tertiary" type="button" onClick={() => {}}>
                Download
              </Button>
            </ActionBox>
            <Separator />
            <ActionBox>
              <h4>Importar Resultado Parcial</h4>
              <input
                type="file"
                id="fileId"
                accept=".xlsx, .xls"
                onChange={e => handleImportResults(e, 'partial')}
                ref={inputFileRef}
                style={{ display: 'none' }}
              />
              <Button
                buttonRole="tertiary"
                type="button"
                onClick={() => {
                  inputFileRef.current?.click();
                }}
                disabled={!!attachingFile}
              >
                {attachingFile ? 'Carregando' : 'Upload'}
              </Button>
            </ActionBox>
            <Separator />
          </StyledBox>
        )}
        {tabSelected === Tab.final && (
          <StyledBox>
            <CampaignsSelectBox>
              <CampaignsSelect
                setValue={value => setCampaignFilterSelected(value)}
                value={campaignFilterSelected}
                placeholder="Campanha"
              />
              <Input
                placeholder="Grupo de cliente"
                inputRole="secondary"
                value={clientGroupInput}
                onChange={e => setClientGroupInput(e.currentTarget.value)}
              />
              <Button
                buttonRole="tertiary"
                type="button"
                onClick={handleFilterClick}
              >
                Filtrar
              </Button>
            </CampaignsSelectBox>
            <Separator />
            <Table data={tableData} isFetching={fetching} />
            <ReactPaginate
              previousLabel={<ChevronLeftRoundedIcon />}
              nextLabel={<ChevronRightRoundedIcon />}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={lastPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={({ selected }) => setPage(selected + 1)}
              containerClassName="campaigns-pagination"
            />
            <Separator />
          </StyledBox>
        )}
      </Content>
    </Container>
  );
};

export default CampaignsCounting;
