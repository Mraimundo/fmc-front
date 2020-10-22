import { vendavallApi } from 'services/api';

export interface Contact {
  name: string;
  cpf: string;
  email: string;
  dddMobile: string;
  mobile: string;
  subjectId: number;
  message: string;
  fileUrl?: string;
  municipio?: string;
  agree: boolean;
  canal: { title: string; value: string };
  estado: { title: string; value: string };
  produtorAgricola: { title: string; value: string };
  ficouSabendo: { title: string; value: string };
  fields_aditional: [];
}

interface ContactResponse {
  type: 'success' | 'error';
  message: string;
}

export default async (contact: Contact): Promise<ContactResponse> => {
  try {
    const request = {
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
              canal_produtos: contact.canal.value,
              estado: contact.estado.value,
              ficou_sabendo: contact.ficouSabendo.value,
              produtor_agricola: contact.produtorAgricola.value,
            },
          ],
        },
      ],
      file: contact.fileUrl || '',
    };

    const { data } = await vendavallApi.post<ContactResponse>(
      'contacts/unlogged',
      request,
    );

    return {
      message: data.message,
      type: data.type === 'success' ? 'success' : 'error',
    };
  } catch (e) {
    return {
      type: 'error',
      message: e.response?.data?.message || 'Falha na requisição',
    };
  }
};
