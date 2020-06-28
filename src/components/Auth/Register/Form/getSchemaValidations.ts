import * as Yup from 'yup';
import { IProfile } from 'config/constants';
import validateCpf from 'util/validations/cpf';
import { hasLowerCase, hasNumber, hasUpperCase } from 'util/validations/string';

const mandatoryMessage = 'Campo obrigatório';

const commomValidations = {
  nick_name: Yup.string().required(mandatoryMessage),
  name: Yup.string().required(mandatoryMessage),
  email: Yup.string().required(mandatoryMessage).email('Email inválido'),
  cpf: Yup.string()
    .required(mandatoryMessage)
    .test('valid-cpf', 'Cpf inválido', validateCpf),
  area_code: Yup.string().required(mandatoryMessage),
  cell_phone: Yup.string().required(mandatoryMessage),
  password: Yup.string()
    .required(mandatoryMessage)
    .min(10, 'Mínimo de 10 caracteres')
    .test(
      'lower-case',
      'Deve conter pelo menos uma letra minúscula',
      hasLowerCase,
    )
    .test(
      'upper-case',
      'Deve conter pelo menos uma letra maiúscula',
      hasUpperCase,
    )
    .test('lower-case', 'Deve conter pelo menos um número', hasNumber),
  password_confirmation: Yup.string()
    .required(mandatoryMessage)
    .oneOf(
      [Yup.ref('password')],
      'Confirmação de senha precisa ser igual a senha',
    ),
};

export default (profile: IProfile): Yup.ObjectSchema<object> => {
  switch (profile) {
    case 'PARTICIPANTE':
      return Yup.object().shape({
        ...commomValidations,
        gender: Yup.string().required(mandatoryMessage),
        birth_date: Yup.date()
          .transform((t, v) => {
            const newValue = v.split('/');
            return new Date(`${newValue[1]}/${newValue[0]}/${newValue[2]}`);
          })
          .typeError('Data inválida')
          .required(mandatoryMessage),
        education_level_select: Yup.object()
          .shape({
            value: Yup.string().required(mandatoryMessage),
          })
          .typeError(mandatoryMessage)
          .required(mandatoryMessage),
        place_of_birth: Yup.string().required(mandatoryMessage),
        nationality: Yup.string().required(mandatoryMessage),
        marital_status_select: Yup.object()
          .shape({
            value: Yup.string().required(mandatoryMessage),
          })
          .typeError(mandatoryMessage)
          .required(mandatoryMessage),
        rg: Yup.string().required(mandatoryMessage),
        rg_emitter: Yup.string().required(mandatoryMessage),
        rg_emitter_uf: Yup.string().required(mandatoryMessage),
        pis_nis: Yup.string().required(mandatoryMessage),
        address: Yup.object().shape({
          zip_code: Yup.string().required(mandatoryMessage),
          /* logradouro: Yup.string().required(mandatoryMessage), */
          street: Yup.string().required(mandatoryMessage),
          number: Yup.string().required(mandatoryMessage),
          complement: Yup.string().required(mandatoryMessage),
          district: Yup.string().required(mandatoryMessage),
          city: Yup.string().required(mandatoryMessage),
          state_code: Yup.string().required(mandatoryMessage),
        }),
      });
    default:
      return Yup.object().shape({ ...commomValidations });
  }
};
