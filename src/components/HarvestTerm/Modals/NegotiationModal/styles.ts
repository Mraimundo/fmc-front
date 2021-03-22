import styled from 'styled-components';

import Modal from 'components/shared/Modal';

export const CustomModal = styled(Modal)`
  ._modalContainer {
    max-width: 720px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    //overflow: hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 23px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 24px;
    margin-left: 23px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.primary};
    }
  }
`;

export const CommentsListWrapper = styled.div`
  height: 250px;
  width: 100%;
  background-color: #f1f;
`;

export const CommentWrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fddd;
`;
