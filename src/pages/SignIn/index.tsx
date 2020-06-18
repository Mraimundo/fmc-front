import React from 'react';
import { useSpring } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';

import logoImg from 'assets/images/logo.svg';

import { StoreState } from 'state/root-reducer';
import { fetchAnythingAction } from 'state/modules/generic/actions';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import { Container, Content, contentAnimation, Contact } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: StoreState) => state.generic.isFetching,
  );

  const onClick = () => {
    dispatch(fetchAnythingAction());
  };

  return (
    <Container>
      <button type="button" onClick={onClick} disabled={isFetching}>
        {isFetching ? 'loading...' : 'click'}
      </button>
      <img src={logoImg} alt="Logo GoBarber" />
      <Content style={props}>
        <FormSignIn />
        <FormSignUp />
      </Content>
      <Contact initialPosition="right-bottom" />
    </Container>
  );
};

export default SignIn;
