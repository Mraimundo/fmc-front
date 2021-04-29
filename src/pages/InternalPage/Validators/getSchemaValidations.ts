import * as Yup from 'yup';

const mandatoryMessage = 'Campo obrigatório';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required(mandatoryMessage),
  time: Yup.string().required(mandatoryMessage),
  date: Yup.string().required(mandatoryMessage),
});
