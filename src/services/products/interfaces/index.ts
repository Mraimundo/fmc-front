export interface Category {
  id: number;
  name: string;
}

export interface Type {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  pictureUrl: string;
  name: string;
  description: string;
  externalLink: string;
  pdfFile: string;
  categories: Category[];
  type: Type;
}
