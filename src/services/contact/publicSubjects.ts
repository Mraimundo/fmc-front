import { vendavallApi } from 'services/api';

interface Subject {
  id: string;
  name: string;
}

interface ApiResponse {
  subjects: Subject[];
}

interface Option {
  value: string;
  title: string;
}

const getPublicSubjects = async (): Promise<Subject[]> => {
  try {
    const {
      data: { subjects },
    } = await vendavallApi.get<ApiResponse>(`contacts/public-subjects`);
    return subjects || [];
  } catch (e) {
    return [];
  }
};

const getPublicSubjectsForSelect = async (): Promise<Option[]> => {
  const subjects = await getPublicSubjects();
  return subjects.map(item => ({
    value: item.id,
    title: item.name,
  }));
};

export { getPublicSubjects, getPublicSubjectsForSelect };
