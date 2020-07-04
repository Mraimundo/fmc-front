import { vendavallApi } from 'services/api';

interface Category {
  id: string;
  name: string;
}

interface ApiResponse {
  categories: Category[];
}

interface Option {
  value: string;
  title: string;
}

const getPrivateCategories = async (subjectId: number): Promise<Category[]> => {
  try {
    const {
      data: { categories },
    } = await vendavallApi.get<ApiResponse>(
      `contacts/get-categories-by-subjects?subject_id=${subjectId}`,
    );
    return categories || [];
  } catch (e) {
    return [];
  }
};

const getPrivateCategoriesForSelect = async (
  subjectId: number,
): Promise<Option[]> => {
  const categories = await getPrivateCategories(subjectId);
  return categories.map(item => ({
    value: item.id,
    title: item.name,
  }));
};

export { getPrivateCategories, getPrivateCategoriesForSelect };
