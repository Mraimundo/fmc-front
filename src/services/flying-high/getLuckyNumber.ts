export default async (cpf: string): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(
      () => resolve(Math.floor(1 + Math.random()*(99999 + 1 - 1))),
      2000
    );
  });
};
