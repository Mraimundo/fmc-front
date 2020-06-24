import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';

const mandatoryMessage = 'Campo obrigatório';

export default (): Yup.ObjectSchema<object> => {
  return Yup.object().shape({
    name: Yup.string().required(mandatoryMessage),
    email: Yup.string().required(mandatoryMessage).email('Email inválido'),
    cpf: Yup.string()
      .required(mandatoryMessage)
      .test('valid-cpf', 'Cpf inválido', validateCpf),
    area_code: Yup.string().required(mandatoryMessage),
    cell_phone: Yup.string().required(mandatoryMessage),
    role_id: Yup.number().required(mandatoryMessage),
    /* establishment_id: Yup.number().required(mandatoryMessage), */
    subsidiary_id: Yup.number().required(mandatoryMessage),
  });
};
