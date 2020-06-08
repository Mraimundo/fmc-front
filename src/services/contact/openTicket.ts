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
        },
      ],
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
