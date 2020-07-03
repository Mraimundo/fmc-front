export default (value: string): boolean => {
  const mobileNumber = value.replace(/\D/g, '');
  if (mobileNumber.length !== 9) {
    return false;
  }
  if (mobileNumber[0] !== '9') {
    return false;
  }

  return true;
};
