import * as Yup from 'yup';
import { IProfile, PROFILES } from 'config/constants';
import validateCpf from 'util/validations/cpf';
import validMobilePhone from 'util/validations/mobilePhone';
import {
  hasLowerCase,
  hasNumber,
  hasUpperCase,
  hasSpecialCharacteres,
} from 'util/validations/string';

const mandatoryMessage = 'Campo obrigatório';

const commomValidations = {
  nick_name: Yup.string().required(mandatoryMessage),
  name: Yup.string().required(mandatoryMessage),
  email: Yup.string().required(mandatoryMessage).email('E-mail inválido'),
  cpf: Yup.string()
    .required(mandatoryMessage)
    .test('valid-cpf', 'CPF inválido', validateCpf),
  area_code: Yup.string().required(mandatoryMessage),
  cell_phone: Yup.string()
    .required(mandatoryMessage)
    .test('valid-mobile', 'Número inválido', validMobilePhone),
};

const cepFields = {
  public_place_select: Yup.object()
    .shape({
      value: Yup.string().required(mandatoryMessage),
    })
    .typeError(mandatoryMessage)
    .required(mandatoryMessage),
  address: Yup.object().shape({
    zip_code: Yup.string().required(mandatoryMessage),
    street: Yup.string().required(mandatoryMessage),
    number: Yup.string().required(mandatoryMessage),
    complement: Yup.string(),
    district: Yup.string().required(mandatoryMessage),
    city: Yup.string().required(mandatoryMessage),
  }),
  state_code_select: Yup.object()
    .shape({
      value: Yup.string().required(mandatoryMessage),
    })
    .typeError(mandatoryMessage)
    .required(mandatoryMessage),
};

const extraProducerFields = {
  producer_group_name: Yup.string(),
  members_group: Yup.array().of(
    Yup.object()
      .shape({
        type: Yup.string().required(mandatoryMessage),
        cpf_cnpj: Yup.string().required(mandatoryMessage),
        name: Yup.string().required(mandatoryMessage),
        ie: Yup.string().required(mandatoryMessage),
        city: Yup.string().required(mandatoryMessage),
        uf: Yup.string().required(mandatoryMessage),
      })
      .typeError(mandatoryMessage),
  ),
  harvest: Yup.object().shape({
    algodao: Yup.string(),
    arroz_irrigado: Yup.string(),
    batata: Yup.string(),
    cafe: Yup.string(),
    cana: Yup.string(),
    cenoura: Yup.string(),
    cevada: Yup.string(),
    citrus: Yup.string(),
    feijao: Yup.string(),
    mandioca: Yup.string(),
    melao: Yup.string(),
    milho: Yup.string(),
    outras: Yup.string(),
    outras_quais: Yup.string(),
    soja: Yup.string(),
    tabaco: Yup.string(),
    tomate: Yup.string(),
    trigo: Yup.string(),
    uva: Yup.string(),
  }),
};

const passwordFields = (editing: boolean) => {
  if (editing) {
    return {
      password: Yup.lazy<string>(v =>
        v !== ''
          ? Yup.string()
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
              .test('lower-case', 'Deve conter pelo menos um número', hasNumber)
              .test(
                'has-special-characteres',
                'Deve conter pelo menos um desses caracteres (!, $, #, %, @, &)',
                hasSpecialCharacteres,
              )
          : Yup.string(),
      ),
      password_confirmation: Yup.string().oneOf(
        [Yup.ref('password')],
        'Confirmação de senha precisa ser igual a senha',
      ),
    };
  }
  return {
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
      .test('lower-case', 'Deve conter pelo menos um número', hasNumber)
      .test(
        'has-special-characteres',
        'Deve conter pelo menos um desses caracteres (!, $, #, %, @, &)',
        hasSpecialCharacteres,
      ),
    password_confirmation: Yup.string()
      .required(mandatoryMessage)
      .oneOf(
        [Yup.ref('password')],
        'Confirmação de senha precisa ser igual a senha',
      ),
  };
};

export default (
  profile: IProfile,
  editing = false,
  autoindicate = false,
): Yup.ObjectSchema<object> => {
  const defaultValidations = {
    ...commomValidations,
    ...passwordFields(editing),
  };

  const participantValidations = {
    ...defaultValidations,
    formatted_birth_date: Yup.date()
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
    gender_select: Yup.object()
      .shape({
        value: Yup.string().required(mandatoryMessage),
      })
      .typeError(mandatoryMessage)
      .required(mandatoryMessage),
    rg: Yup.string().required(mandatoryMessage),
    rg_emitter: Yup.string().required(mandatoryMessage),
    // rg_emitter_uf: Yup.string().required(mandatoryMessage),
    rg_emitter_uf_select: Yup.object()
      .shape({
        value: Yup.string().required(mandatoryMessage),
      })
      .typeError(mandatoryMessage)
      .required(mandatoryMessage),
    pis_nis: Yup.string().required(mandatoryMessage),
  };

  if (autoindicate) {
    if (profile !== PROFILES.producer) {
      return Yup.object().shape({ ...participantValidations });
    }
  }

  switch (profile) {
    case PROFILES.participant:
      return Yup.object().shape({ ...participantValidations, ...cepFields });
    case PROFILES.producer:
      if (autoindicate) {
        return Yup.object().shape({
          ...participantValidations,
          ...extraProducerFields,
          ...cepFields,
        });
      }
      return Yup.object().shape({
        ...defaultValidations,
        ...extraProducerFields,
        ...cepFields,
      });
    default:
      return Yup.object().shape({ ...defaultValidations });
  }
};
