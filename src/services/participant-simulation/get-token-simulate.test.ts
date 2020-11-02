import getTokenSimulate from './get-token-simulate';

describe('get-token-simulate', () => {
  test('should return a token', async () => {
    const token = await getTokenSimulate();
    expect(typeof token).toBe('string');
    expect(token !== '').toBe(true);
  });
});
