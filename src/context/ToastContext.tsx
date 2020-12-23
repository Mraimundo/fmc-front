import React, { useContext, createContext, useCallback, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

/* import { ToastContainer, toast } from 'react-toastify'; */

import Test from 'components/Modals/InfoMessage';

export interface ToastMessage {
  type?: 'error' | 'success' | 'info';
  title: string;
}

interface Params {
  position: 'top-right' | 'bottom-right';
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  className: string;
}

interface ToastContextData {
  addToast(message: ToastMessage): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

/* const params: Params = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  className: '_modal-toast',
}; */

interface Popup {
  title: string;
  isOpen: boolean;
}

const ToastProvider: React.FC = ({ children }) => {
  // const [popups, setpopups] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  const addToast = useCallback(({ title }: ToastMessage) => {
    setText(title);
    setIsOpen(true);

    /* switch (type) {
      case 'success':
        toast.success(title, params);
        break;
      case 'error':
        toast.error(title, params);
        break;
      default:
        toast.info(title, params);
    } */
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* <ToastContainer /> */}
      <Test
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        text={text}
        className="_modal-toast"
      />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
