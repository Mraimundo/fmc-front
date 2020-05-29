import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonRole: 'primary' | 'secondary';
  type: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ReactLoading className="_loading" type="bars" height={24} width={24} />
    ) : (
      <>{children}</>
    )}
  </Container>
);

export default Button;
