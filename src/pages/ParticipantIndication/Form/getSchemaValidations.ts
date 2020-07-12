import * as Yup from 'yup';
import validateCpf from 'util/validations/cpf';
import validMobilePhone from 'util/validations/mobilePhone';

const mandatoryMessage = 'Campo obrigatório';

export default (): Yup.ObjectSchema<object> => {
  return Yup.object().shape({
    name: Yup.string().required(mandatoryMessage),
    email: Yup.string().required(mandatoryMessage).email('Email inválido'),
    cpf: Yup.string()
      .required(mandatoryMessage)
      .test('valid-cpf', 'Cpf inválido', validateCpf),
    area_code: Yup.string(),
    cell_phone: Yup.lazy<string>(v =>
      v !== ''
        ? Yup.string()
            .required(mandatoryMessage)
            .test('valid-mobile', 'Número inválido', validMobilePhone)
        : Yup.string(),
    ),
    role_select: Yup.object()
      .shape({
        value: Yup.string().required(mandatoryMessage),
      })
      .typeError(mandatoryMessage)
      .required(mandatoryMessage),
    /* establishment_id: Yup.number().required(mandatoryMessage), */
    subsidiary_select: Yup.object()
      .shape({
        value: Yup.string().required(mandatoryMessage),
      })
      .typeError(mandatoryMessage)
      .required(mandatoryMessage),
  });
};
