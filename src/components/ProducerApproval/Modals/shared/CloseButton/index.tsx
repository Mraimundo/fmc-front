import React from 'react';

import closeIcon from 'assets/images/training/close-icon.svg';
import { ReactSVG } from 'react-svg';
import { Close } from './styles';

interface CloseButtonProps {
  onClickHandler: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClickHandler }) => {
  return (
    <Close>
      <button type="button" onClick={onClickHandler}>
        <ReactSVG src={closeIcon} />
      </button>
    </Close>
  );
};

export default CloseButton;
