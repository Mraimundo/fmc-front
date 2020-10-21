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
  municipio: string;
  agree: boolean;
  canal: string;
  estado: string;
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
      municipio: contact.municipio,
      agree: contact.agree,
      canal_produtos: contact.canal,
      estado: contact.estado,
      contact_records: [
        {
          type: 'p',
          text: contact.message,
        },
      ],
      file: contact.fileUrl || '',
    };
    console.log('request');
    console.log(request);
    const { data } = await vendavallApi.post<ContactResponse>(
      'contacts/unlogged',
      request,
    );
    console.log('request2');
    console.log(request);
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
