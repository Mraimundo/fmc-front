import * as Yup from 'yup';
import { PROFILES, IProfile } from 'config/constants';
import { Participant } from 'services/register/getParticipantData';
import validateCpf from 'util/validations/cpf';

export default (profile: IProfile): Yup.ObjectSchema<object> => {
  const mandatoryMessage = 'Campo obrigatório';
  const t: Participant;

  switch (profile) {
    case 'FMC':
      return Yup.object().shape({
        nick_name: Yup.string().required(mandatoryMessage),
        name: Yup.string().required(mandatoryMessage),
        email: Yup.string().required(mandatoryMessage).email('Email inválido'),
        cpf: Yup.string()
          .required(mandatoryMessage)
          .test('valid-cpf', 'Cpf inválido', validateCpf),
        area_code: Yup.string()
          .required(mandatoryMessage)
          .max(2, 'Máximo de 2 caracteres'),
        cell_phone: Yup.string()
          .required(mandatoryMessage)
          .max(9, 'Máximo de 9 caracteres')
          .min(9, 'Mínimo de 9 caracteres'),
        password: Yup.string(),
      });
    case 'PARTICIPANTE':
      return Yup.object().shape({});
    default:
      return Yup.object().shape({});
  }
};

const schema = Yup.object().shape({});
