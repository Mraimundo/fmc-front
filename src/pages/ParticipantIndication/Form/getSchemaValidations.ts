import * as Yup from 'yup';

export default (): Yup.ObjectSchema<object> => {
  return Yup.object().shape({});
};
