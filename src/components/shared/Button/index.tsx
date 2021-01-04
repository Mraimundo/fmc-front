import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonRole: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  type: 'button' | 'submit';
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  loadingText = '',
  type,
  ...rest
}) => (
  <Container type={type} {...rest}>
    {loading ? (
      <>
        {loadingText && <span>{loadingText}</span>}
        <ReactLoading
          className="_loading"
          type="bars"
          height={24}
          width={24}
          data-testid="button-loader"
        />
      </>
    ) : (
      <>{children}</>
    )}
  </Container>
);

export default Button;
