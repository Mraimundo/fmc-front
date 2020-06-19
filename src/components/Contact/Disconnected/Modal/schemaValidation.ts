import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';

export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  cpf: Yup.string()
    .required('Cpf é obrigatório')
    .test('valid-cpf', 'Cpf inválido', validateCpf),
  email: Yup.string().required('Email é obrigatório'),
  dddMobile: Yup.string().required('DDD do Celular é obrigatório'),
  mobile: Yup.string().required('Número de Celular é obrigatório'),
  subject: Yup.string().required('Assunto é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatória'),
  fileUrl: Yup.string(),
});
