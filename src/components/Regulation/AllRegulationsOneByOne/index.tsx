import React, { useCallback, useState, useEffect } from 'react';
import { useToast } from 'context/ToastContext';
import { useAuth } from 'context/AuthContext';
import parser from 'html-react-parser';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import logoImg from 'assets/images/logo.png';
import {
  getAllRegulations,
  getRegulationById,
  acceptRegulation,
} from 'services/register/regulation';
import Loading from './Loading';

import {
  Container,
  Content,
  RegulationContent,
  Button,
  Modal,
  Header,
} from './styles';

interface Props {
  opened: boolean;
}

const AllRegulationsOneByOne: React.FC<Props> = ({ opened }) => {
  const { addToast } = useToast();
  const { updateParticipantData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [accepting, setAccepting] = useState(false);
  const [canAccept, setCanAccept] = useState(false);
  const [, setShowModal] = useState(false);
  const [regulations, setRegulations] = useState<Omit<Regulation, 'content'>[]>(
    [],
  );
  const [selectedRegulationIndex, setSelectedRegulationIndex] = useState(-1);
  const [regulation, setRegulation] = useState<Regulation | null>(null);

  useEffect(() => {
    getAllRegulations().then(data => {
      const regulationsToAccept = data.filter(item => !item.accepted);
      if (regulationsToAccept.length > 0) {
        setRegulations(regulationsToAccept);
        setShowModal(true);
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
    setTimeout(() => {
      getRegulationById(regulations[selectedRegulationIndex].id)
        .then(data => {
          setRegulation(data);
          setCanAccept(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  }, [selectedRegulationIndex, regulations]);

  const handleAcceptClick = useCallback(async () => {
    if (!regulation) return;
    setAccepting(true);
    try {
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

  const handleDivScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 2
    ) {
      setCanAccept(true);
    }
  };

  return (
    <Modal isOpen={opened} onRequestClose={() => setShowModal(false)}>
      <Container>
        <Header>
          <img src={logoImg} alt="Logo" />
        </Header>
        <Content>
          {loading ? (
            <RegulationContent
              type="primary"
              onScroll={handleDivScroll}
              key="loading"
            >
              <Loading />
            </RegulationContent>
          ) : (
            <RegulationContent
              type="primary"
              onScroll={handleDivScroll}
              key={`regulation-${regulation?.id}`}
            >
              {parser(regulation?.content || '')}
            </RegulationContent>
          )}

          <Button
            type="button"
            buttonRole="primary"
            onClick={handleAcceptClick}
            loading={accepting}
            disabled={!canAccept || loading}
          >
            Aceito participar
          </Button>
        </Content>
      </Container>
    </Modal>
  );
};

export default AllRegulationsOneByOne;
