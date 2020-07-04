export interface CreateTicketDTO {
  subjectId: number;
  categoryId: number;
  message: string;
  fileUrl: string;
}

export interface SendMessageDTO {
  message: string;
  fileUrl: string;
  contactId: number;
}
