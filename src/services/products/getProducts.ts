import { pluginApi } from 'services/api';
import { Product } from './interfaces';

const mocked = false;

interface ProductApi {
  id: number;
  name: string;
  picture: string;
  description: string;
  external_link: string;
  file: string;
  fmc_product_categories: {
    id: number;
    name: string;
  }[];
  type: {
    id: number;
    name: string;
  };
}

interface ApiResponse {
  data: ProductApi[];
}

const mock: Product[] = [
  {
    id: 1,
    pictureUrl: 'https://www.fmcagricola.com.br/Content/Fotos/boral.png',
    name: 'Boral 500 SC',
    description: 'Aplicações: controle de pragas, plantas daninhas, doenças',
    externalLink: 'https://www.fmcagricola.com.br/Produtos/DetalhesProdutos/20',
    pdfFile: '',
    categories: [
      {
        id: 1,
        name: 'Milho',
      },
      {
        id: 2,
        name: 'Soja',
      },
    ],
    type: {
      id: 4,
      name: 'Inseticidas',
    },
  },
  {
    id: 2,
    pictureUrl: 'https://www.fmcagricola.com.br/Content/Fotos/boral.png',
    name: 'Boral 500 SC',
    description: 'Aplicações: controle de pragas, plantas daninhas, doenças',
    externalLink: 'https://www.fmcagricola.com.br/Produtos/DetalhesProdutos/20',
    pdfFile: '',
    categories: [
      {
        id: 1,
        name: 'Milho',
      },
      {
        id: 2,
        name: 'Soja',
      },
    ],
    type: {
      id: 4,
      name: 'Inseticidas',
    },
  },
];

export interface Filters {
  categoryId?: number;
  typeId?: number;
}

const transformer = (data: ProductApi[]): Product[] => {
  return data.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    pictureUrl: item.picture,
    externalLink: item.external_link,
    pdfFile: item.file,
    type: {
      id: item.type.id,
      name: item.type.name,
    },
    categories: item.fmc_product_categories.map(category => ({
      id: category.id,
      name: category.name,
    })),
  }));
};

export default async (filters: Filters): Promise<Product[]> => {
  if (mocked) {
    return mock;
  }

  try {
    let extraParams = '';
    if (filters.categoryId) {
      extraParams += `&categories[0]=${filters.categoryId}`;
    }
    if (filters.typeId) {
      extraParams += `&types[0]=${filters.typeId}`;
    }

    const {
      data: { data },
    } = await pluginApi.get<ApiResponse>(
      `fmc-products?page=1&limit=100&order=desc${extraParams}`,
    );
    return transformer(data);
  } catch (e) {
    return [];
  }
};
