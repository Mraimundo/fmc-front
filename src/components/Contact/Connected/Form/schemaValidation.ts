import * as Yup from 'yup';

const mandatoryMessage = 'Campo obrigatório';
export default Yup.object().shape({
  subject: Yup.object()
    .shape({
      value: Yup.string().required(mandatoryMessage),
    })
    .typeError(mandatoryMessage)
    .required(mandatoryMessage),
  category: Yup.object()
    .shape({
      value: Yup.string().required(mandatoryMessage),
    })
    .typeError(mandatoryMessage)
    .required(mandatoryMessage),
  message: Yup.string().required('Mensagem é obrigatória'),
});
