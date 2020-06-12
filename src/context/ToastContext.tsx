import React, { useContext, createContext, useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

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
}

interface ToastContextData {
  addToast(message: ToastMessage): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const params: Params = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(({ type, title }: ToastMessage) => {
    switch (type) {
      case 'success':
        toast.success(title, params);
        break;
      case 'error':
        toast.error(title, params);
        break;
      default:
        toast.info(title, params);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
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
