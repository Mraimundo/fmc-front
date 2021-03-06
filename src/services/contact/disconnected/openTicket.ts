import { vendavallApi } from 'services/api';
import { Option } from 'components/shared/Select';

export interface Contact {
  name: string;
  cpf: string;
  email: string;
  dddMobile: string;
  mobile: string;
  subjectId: number;
  message?: string;
  fileUrl?: string;
  municipio?: string;
  canal?: string;
  estado?: Option;
  produtorAgricola?: Option;
  ficouSabendo?: Option;
  fields_aditional?: [];
}

interface ContactResponse {
  type: 'success' | 'error';
  message: string;
}

export default async (contact: Contact): Promise<ContactResponse> => {
  try {
    let request = {};

    if (
      contact.municipio &&
      contact.estado &&
      contact.produtorAgricola?.value
    ) {
      request = {
        cpf_not_registered: contact.cpf,
        email_not_registered: contact.email,
        contact_phone: `${contact.dddMobile}${contact.mobile}`,
        name: contact.name,
        contact_subject_id: contact.subjectId,
        contact_records: [
          {
            type: 'p',
            text: contact.message,
            fields_aditional: [
              {
                municipio: contact.municipio,
                canal_produtos: contact.canal || '',
                estado: contact.estado?.value || '',
                ficou_sabendo: contact.ficouSabendo?.value || '',
                produtor_agricola: contact.produtorAgricola?.value || '',
              },
            ],
          },
        ],
        file: contact.fileUrl || '',
      };
    } else {
      request = {
        cpf_not_registered: contact.cpf,
        email_not_registered: contact.email,
        contact_phone: `${contact.dddMobile}${contact.mobile}`,
        name: contact.name,
        contact_subject_id: contact.subjectId,
        contact_records: [
          {
            type: 'p',
            text: contact.message,
          },
        ],
        file: contact.fileUrl || '',
      };
    }

    const { data } = await vendavallApi.post<ContactResponse>(
      'contacts/unlogged',
      request,
    );

    return {
      message:
        data.type === 'success'
          ? 'Sua mensagem foi enviada e ser?? respondida em at?? 48 horas'
          : data.message,
      type: data.type === 'success' ? 'success' : 'error',
    };
  } catch (e) {
    return {
      type: 'error',
      message: e.response?.data?.message || 'Falha na requisi????o',
    };
  }
};
