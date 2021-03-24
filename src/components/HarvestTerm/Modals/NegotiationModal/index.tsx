import React, { useCallback, useEffect, useState } from 'react';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import CommentIcon from 'assets/images/contact/message.svg';
import CommentForm from 'components/HarvestTerm/Forms/Comment';
import { getComments } from 'services/harvest-term/comments';
import { Comment } from 'services/harvest-term/interface';
import CommentList from 'components/HarvestTerm/Lists/Comments';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';

import {
  Container,
  Close,
  CustomModal as Modal,
  Header,
  CommentsListWrapper,
  CommentWrapper,
} from './styles';

interface NegotiationModalProps {
  isOpen: boolean;
  agreementTermId: string;
  cancelRequest: () => void;
}

const NegotiationModal: React.FC<NegotiationModalProps> = ({
  isOpen,
  agreementTermId,
  cancelRequest,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const { tabs, tabSelected } = useHarvestTermsContext();

  const fetchComments = useCallback(async () => {
    const result = await getComments(parseInt(agreementTermId, 10));
    setComments(result);
  }, [agreementTermId]);

  const handleConfirmComment = useCallback(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    if (isOpen) {
      fetchComments();
    }
  }, [fetchComments, isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={cancelRequest}>
      <Close>
        <button type="button" onClick={cancelRequest}>
          <ReactSVG src={CloseIcon} />
        </button>
      </Close>
      <Container>
        <Header>
          <ReactSVG src={CommentIcon} />
          <h3>Negociação</h3>
        </Header>
        <CommentsListWrapper>
          <p>Comentário:</p>
          <CommentList comments={comments} />
        </CommentsListWrapper>
        {tabSelected === tabs[0] && (
          <CommentWrapper>
            <CommentForm
              agreementTermId={agreementTermId}
              onConfirmComment={handleConfirmComment}
            />
          </CommentWrapper>
        )}
      </Container>
    </Modal>
  );
};

export default NegotiationModal;
