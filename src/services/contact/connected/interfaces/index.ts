export interface Contact {
  id: number;
  status: number;
  created: Date;
  file: string;
  contact_subject_title: string;
  contact_category_title: string;
}

export interface Message {
  id: number;
  contact_id: number;
  text: string;
  type: 'p' | 'r';
  created: Date;
  file: string;
  resposible_name: string;
}
