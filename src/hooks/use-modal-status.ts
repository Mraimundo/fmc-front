import { useCallback, useState } from 'react';

export interface ModalStatus {
  opened: boolean;
  closeModal(): void;
  openModal(): void;
}

const useModalStatus = (): ModalStatus => {
  const [opened, setOpened] = useState(false);

  const closeModal = useCallback(() => {
    setOpened(false);
  }, []);

  const openModal = useCallback(() => {
    setOpened(true);
  }, []);

  return { opened, closeModal, openModal };
};

export default useModalStatus;
