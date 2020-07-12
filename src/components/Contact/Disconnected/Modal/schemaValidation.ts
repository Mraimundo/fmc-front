import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';
import validMobilePhone from 'util/validations/mobilePhone';

export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  cpf: Yup.string()
    .required('Cpf é obrigatório')
    .test('valid-cpf', 'Cpf inválido', validateCpf),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  dddMobile: Yup.string().required('DDD é obrigatório'),
  mobile: Yup.string()
    .required('Número é obrigatório')
    .test('valid-mobile', 'Número inválido', validMobilePhone),
  subject: Yup.object()
    .shape({
      value: Yup.string().required('Assunto é obrigatório'),
    })
    .required('Assunto é obrigatório')
    .typeError('Assunto é obrigatório'),
  message: Yup.string()
    .required('Mensagem é obrigatória')
    .max(350, 'Limite de 350 caracteres'),
  fileUrl: Yup.string(),
});
