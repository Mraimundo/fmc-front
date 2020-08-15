export interface Participant {
  id: number;
  name: string;
  points: number;
  urlPi: string;
  imageUrl: string;
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
}

export interface Category {
  id: number;
  name: string;
}

export interface Type {
  id: number;
  name: string;
}

export interface ParticipantGroup {
  id: number;
  name: string;
  points: number;
  category: string;
  urlPi: string;
}
