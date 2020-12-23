export default (goal: number, realized: number): number => {
  if (!goal) return 0;

  return (realized * 100) / goal;
};
