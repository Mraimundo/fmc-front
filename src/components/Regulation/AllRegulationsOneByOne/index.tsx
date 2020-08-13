import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useToast } from 'context/ToastContext';
import { useAuth } from 'context/AuthContext';
import parser from 'html-react-parser';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import logoImg from 'assets/images/logo.png';
import {
  getAllRegulations,
  getRegulationById,
  acceptRegulation,
  fetchAgreementTerm,
} from 'services/register/regulation';
import Loading from './Loading';

import {
  Container,
  Content,
  RegulationContent,
  StyledButtonConfirm,
  Modal,
  Header,
  StyledAgreementTermPending,
  BoxAccept,
} from './styles';
import AgreementTerm from '../AgreementTerm';

interface Props {
  opened: boolean;
}

const AllRegulationsOneByOne: React.FC<Props> = ({ opened }) => {
  const { addToast } = useToast();
  const { updateParticipantData, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [accepting, setAccepting] = useState(false);
  const [canAccept, setCanAccept] = useState(false);
  const [canAcceptConfirm, setCanAcceptConfirm] = useState(false);
  const [, setShowModal] = useState(false);
  const [regulations, setRegulations] = useState<Omit<Regulation, 'content'>[]>(
    [],
  );
  const [selectedRegulationIndex, setSelectedRegulationIndex] = useState(-1);
  const [regulation, setRegulation] = useState<Regulation | null>(null);
  const [agreementTermIsApproved, setAgreementTermIsApproved] = useState(false);
  const [hasPendingAgreementTerm, setHasPendingAgreementTerm] = useState(false);

  useEffect(() => {
    getAllRegulations().then(data => {
      const regulationsToAccept = data.filter(item => !item.accepted);
      if (regulationsToAccept.length > 0) {
        setRegulations(regulationsToAccept);
        setShowModal(true);
        setAgreementTermIsApproved(false);
        setHasPendingAgreementTerm(false);
      }
    });
  }, []);

  useEffect(() => {
    if (regulations.length > 0) {
      setSelectedRegulationIndex(0);
    }
  }, [regulations]);

  useEffect(() => {
    if (selectedRegulationIndex === -1) return;
    if (!regulations) return;
    setLoading(true);

    const selectedRegulation = regulations[selectedRegulationIndex];

    const isAgreementTerm = selectedRegulation.type === 'safra_term';

    if (isAgreementTerm) {
      fetchAgreementTerm(selectedRegulation.id).then(resp => {
        const hasPending = resp.list_agreement_terms.filter(
          term => term.approved === null,
        );

        if (hasPending.length > 0) {
          setHasPendingAgreementTerm(true);
        }

        const hasApproved = resp.list_agreement_terms.filter(
          term => term.approved === true,
        );

        if (hasApproved.length > 0) {
          setAgreementTermIsApproved(true);
        }
      });
    }

    setTimeout(() => {
      getRegulationById(selectedRegulation.id)
        .then(data => {
          setRegulation(data);
          setCanAccept(false);
          setCanAcceptConfirm(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [selectedRegulationIndex, regulations]);

  const handleAcceptClick = useCallback(async () => {
    if (!regulation) return;
    setAccepting(true);
    try {
      setCanAccept(false);
      setCanAcceptConfirm(false);
      await acceptRegulation(regulation.id, regulation.version);
      setSelectedRegulationIndex(i => {
        if (i >= regulations.length - 1) {
          setShowModal(false);
          updateParticipantData();
          return i;
        }
        return i + 1;
      });
    } catch {
      addToast({
        title:
          'Falha ao aceitar regulamento. Favor entrar em contato com o suporte',
        type: 'error',
      });
    }
    setAccepting(false);
  }, [regulation, addToast, regulations, updateParticipantData]);

  /* const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 2
    ) {
      setCanAccept(true);
    }
  }; */

  const acceptAction = useMemo(
    () => (
      <>
        <BoxAccept>
          <input
            type="checkbox"
            name="test"
            disabled={loading}
            checked={canAccept}
            onChange={() => {
              setCanAccept(e => !e);
            }}
          />
          <span>Concordo e aceito os termos de uso</span>
        </BoxAccept>
        <BoxAccept>
          <input
            type="checkbox"
            name="test"
            disabled={loading}
            checked={canAcceptConfirm}
            onChange={() => {
              setCanAcceptConfirm(e => !e);
            }}
          />
          <span>Concordo e aceito os termos de uso</span>
        </BoxAccept>
        <StyledButtonConfirm
          type="button"
          buttonRole="primary"
          onClick={handleAcceptClick}
          loading={accepting}
          disabled={!canAccept || !canAcceptConfirm || loading}
        >
          Aceito participar
        </StyledButtonConfirm>
        <span>
          {`O botão "Aceito Participar" será habilitado após a leitura do
                regulamento na integra.`}
        </span>
      </>
    ),
    [accepting, handleAcceptClick, canAccept, canAcceptConfirm, loading],
  );

  if (loading) {
    return (
      <Modal isOpen={opened} onRequestClose={() => setShowModal(false)}>
        <Container>
          <Header>
            <img src={logoImg} alt="Logo" />
          </Header>
          <Content>
            <RegulationContent type="primary" key="loading">
              <Loading />
            </RegulationContent>
            {acceptAction}
          </Content>
        </Container>
      </Modal>
    );
  }

  if (!loading && hasPendingAgreementTerm) {
    return (
      <Modal isOpen onRequestClose={() => setShowModal(false)}>
        <Container>
          <Header>
            <img src={logoImg} alt="Logo" />
          </Header>
          <Content>
            <StyledAgreementTermPending type="primary">
              <h2>Acordo de Safra em análise.</h2>
              <div>
                Em alguns dias iremos verificar a assinatura e se estiver tudo
                certo você será avisado por email que seu acesso está liberado.
              </div>
            </StyledAgreementTermPending>
            <StyledButtonConfirm
              type="button"
              buttonRole="primary"
              onClick={signOut}
              loading={accepting}
            >
              Sair
            </StyledButtonConfirm>
          </Content>
        </Container>
      </Modal>
    );
  }

  if (
    !loading &&
    regulation?.type === 'safra_term' &&
    !hasPendingAgreementTerm &&
    !agreementTermIsApproved
  ) {
    return (
      <Modal isOpen onRequestClose={() => setShowModal(false)}>
        <Container>
          <Header>
            <img src={logoImg} alt="Logo" />
          </Header>
          <Content>
            <AgreementTerm
              regulation={regulation}
              handleIsResponsible={() => setAgreementTermIsApproved(true)}
              handleSendAgreementTerm={() => setHasPendingAgreementTerm(true)}
            />
          </Content>
        </Container>
      </Modal>
    );
  }

  return (
    <Modal isOpen={opened} onRequestClose={() => setShowModal(false)}>
      <Container>
        <Header>
          <img src={logoImg} alt="Logo" />
        </Header>
        <Content>
          <>
            <RegulationContent
              type="primary"
              key={`regulation-${regulation?.id}`}
            >
              {parser(regulation?.content || '')}
            </RegulationContent>
            {acceptAction}
          </>
        </Content>
      </Container>
    </Modal>
  );
};

export default AllRegulationsOneByOne;
