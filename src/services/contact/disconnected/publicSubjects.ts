import { vendavallApi } from 'services/api';

interface Subject {
  id: string;
  title: string;
}

interface ApiResponse {
  data: Subject[];
}

interface Option {
  value: string;
  title: string;
}

const getPublicSubjects = async (): Promise<Subject[]> => {
  try {
    const {
      data: { data },
    } = await vendavallApi.get<ApiResponse>(`contacts/public-subjects`);
    return data || [];
  } catch (e) {
    return [];
  }
};

const getPublicSubjectsForSelect = async (): Promise<Option[]> => {
  const subjects = await getPublicSubjects();
  return subjects.map(item => ({
    value: item.id,
    title: item.title,
  }));
};

export { getPublicSubjects, getPublicSubjectsForSelect };
