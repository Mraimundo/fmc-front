import { vendavallApi } from 'services/api';

interface Subject {
  id: string;
  title: string;
}

interface ApiResponse {
  subjects: Subject[];
}

interface Option {
  value: string;
  title: string;
}

const getPrivateSubjects = async (): Promise<Subject[]> => {
  try {
    const {
      data: { subjects },
    } = await vendavallApi.get<ApiResponse>(`contacts/get-private-subjects`);
    return subjects || [];
  } catch (e) {
    return [];
  }
};

const getPrivateSubjectsForSelect = async (): Promise<Option[]> => {
  const subjects = await getPrivateSubjects();
  return subjects.map(item => ({
    value: item.id,
    title: item.title,
  }));
};

export { getPrivateSubjects, getPrivateSubjectsForSelect };
