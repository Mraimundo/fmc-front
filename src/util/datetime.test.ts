import { formatDate } from './datetime';

describe('src/utils/datetime', () => {
  describe('formatDate fn', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('formatDate should be a function', () => {
      expect(formatDate).toBeInstanceOf(Function);
    });

    it('formatDate("2019-01-10") should return string', () => {
      expect(typeof formatDate('2019-01-10')).toBe('string');
    });

    it('formatDate("") should be return ""', () => {
      expect(formatDate('')).toBe('');
    });

    it('formatDate("2019-04-10") should be return "10/04/2019"', () => {
      expect(formatDate('2019-04-10')).toBe('10/04/2019');
    });

    it('formatDate("2019-04-10") should be return "10/04"', () => {
      expect(formatDate('2019-04-10', 'dd/MM')).toBe('10/04');
    });

    it('formatDate("2020-06-24T20:51:14-03:00") should be return "24/06/2020"', () => {
      expect(formatDate('2020-06-24T20:51:14-03:00')).toBe('24/06/2020');
    });
  });
});
