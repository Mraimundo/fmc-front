import { ObjectSchema, ValidationError } from 'yup';
import { useCallback } from 'react';

interface Errors {
  [field: string]: string;
}

function useSchema<T>(schema: ObjectSchema) {
  const isValid = useCallback(
    (data: T): Promise<boolean> => {
      return schema.isValid(data);
    },
    [schema],
  );

  const getErrors = useCallback(
    async (data: T): Promise<Errors> => {
      try {
        await schema.validate(data, { abortEarly: false });
      } catch (e) {
        if (e instanceof ValidationError) {
          const errors: Errors = {};

          e.inner.forEach(err => {
            errors[err.path] = err.errors.join(', ');
          });

          return errors;
        }
      }
      return {};
    },
    [schema],
  );

  return { getErrors, isValid };
}

export default useSchema;
