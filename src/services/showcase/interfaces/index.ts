export interface Participant {
  id: number;
  name: string;
  points: number;
  url_pi: string;
  image_url: string;
  type: 'cpf' | 'cnpj';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  providerId: number;
  provider: string;
  priceFrom: number;
  price: number;
  saleOff: boolean;
  status: string;
  imageUrl: string;
  catalogUrl: string;
  urlComplet: string;
}
