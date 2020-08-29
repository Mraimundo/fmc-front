export interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
}

export default async (): Promise<Campaign[]> => {
  return [
    {
      id: 50,
      imageUrl:
        'https://storage.vendavall.com.br/tinymce/1595038632.5f125ba8a66501.23325933.png',
      title: 'Título da campanha',
      startDate: '02/02/2020',
      endDate: '25/02/2020',
    },
    {
      id: 51,
      imageUrl:
        'https://storage.vendavall.com.br/tinymce/1595038632.5f125ba8a66501.23325933.png',
      title: 'Título da campanha',
      startDate: '02/02/2020',
      endDate: '25/02/2020',
    },
  ];
};
