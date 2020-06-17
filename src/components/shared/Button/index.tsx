import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  buttonRole: 'primary' | 'secondary' | 'tertiary';
  type: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? (
      <ReactLoading
        className="_loading"
        type="bars"
        height={24}
        width={24}
        data-testid="button-loader"
      />
    ) : (
      <>{children}</>
    )}
  </Container>
);

export default Button;
