import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';

export default Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  cpf: Yup.string()
    .required('Cpf é obrigatório')
    .test('valid-cpf', 'Cpf inválido', validateCpf),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  dddMobile: Yup.string(),
  mobile: Yup.string(),
  subject: Yup.string().required('Assunto é obrigatório'),
  message: Yup.string()
    .required('Mensagem é obrigatória')
    .max(350, 'Limite de 350 caracteres'),
  fileUrl: Yup.string(),
});
